const techData = {
  grip: {
    label: "仿生章鱼手抓取",
    title: "从规则硬物扩展到几乎所有日常物品",
    body:
      "柔性触手可自适应玻璃杯、衣物、钥匙、水果等不同形状与材质，将第一代机械掌<60%的成功率提升到95%+。",
    stats: [
      ["95%+", "目标抓取成功率"],
      ["6条", "线控柔性触手"],
      ["260倍", "最大负载/自重比"],
    ],
    details: [
      ["解决痛点", "第一代机械掌只能抓规则硬质物体，面对衣服、玻璃杯、钥匙等日常物品稳定性不足。"],
      ["工程方案", "以柔性触手包络目标，通过双电机协同控制张力，降低对精确夹持姿态的依赖。"],
      ["落地价值", "把机器人从“移动平台”推进到能真正拿取、递送和辅助照护的服务设备。"],
    ],
    points: ["深度相机获取目标轮廓与空间坐标", "逆运动学求解末端姿态与接近路径", "触手包络目标并进行张力闭环控制"],
    gallery: [
      ["assets/images/octopus-hand-diagram.webp", "仿生章鱼手结构示意图", "触手模块、控制模块和线控结构共同完成柔性包络式抓取。"],
      ["assets/images/octopus-hand-render.webp", "仿生章鱼手三维结构图", "三维结构图展示双电机协同、线控触手与控制模块的装配关系。"],
    ],
  },
  vision: {
    label: "单深度摄像头视觉",
    title: "用D435i统一深度感知、定位和抓取坐标转换",
    body:
      "从RGB+深度双摄分离升级为Intel RealSense D435i单深度摄像头，减少数据不同步和硬件冗余，同时提升抓取定位精度。",
    stats: [
      ["30%", "硬件成本降低"],
      ["40%", "抓取定位精度提升"],
      ["2倍", "响应速度加快"],
    ],
    details: [
      ["解决痛点", "双摄方案存在时间同步和标定误差，抓取时像素坐标到世界坐标的转换链条更复杂。"],
      ["工程方案", "以D435i深度流作为抓取主感知输入，结合OpenNI2 SDK完成深度处理和坐标转换。"],
      ["落地价值", "降低整机成本与调试难度，让机械臂抓取更稳定，也方便远程无头调试。"],
    ],
    points: ["采集目标深度图与空间点云", "像素坐标转换为机器人世界坐标", "逆运动学实时求解机械臂目标姿态"],
    gallery: [
      ["assets/images/vision-prototype-arm.webp", "机械臂与深度摄像头实物", "PPT视觉升级页中的机械臂视觉实物素材，用于展示D435i接入抓取系统。"],
      ["assets/images/video-media2.jpg", "机械臂抓取视频封面", "机械臂端侧控制与视觉定位联动，验证视觉坐标到执行动作的闭环。"],
    ],
  },
  nav: {
    label: "SLAM精准导航",
    title: "厘米级建图，动态避障响应小于0.1秒",
    body:
      "激光SLAM与视觉SLAM融合，结合麦克纳姆轮运动学建模、陀螺仪与编码器融合，实现室内自主探索、路径规划和重规划。",
    stats: [
      ["厘米级", "室内地图精度"],
      ["<0.1秒", "动态避障响应"],
      ["80%", "路径规划效率提升"],
    ],
    details: [
      ["解决痛点", "超声波避障只能判断近距离障碍，无法形成地图，机器人容易反复试探或路径混乱。"],
      ["工程方案", "用ROS gmapping建立环境地图，融合编码器和陀螺仪姿态，配合自定义导航栈进行局部重规划。"],
      ["落地价值", "在家庭、养老机构走廊和房间内稳定送物，遇到临时障碍可快速绕行。"],
    ],
    points: ["激光/视觉信息完成建图定位", "导航栈生成全局路径与局部避障策略", "底盘执行并持续回传里程计与姿态误差"],
    gallery: [
      ["assets/images/slam-map.webp", "SLAM建图效果", "SLAM地图素材展示室内环境建图和自主探索结果。"],
      ["assets/images/chassis-demo.webp", "小鲲底盘移动演示", "底盘实测用于验证麦克纳姆轮运动控制、路径跟踪和室内避障能力。"],
    ],
  },
  sense: {
    label: "双陀螺仪差分算法",
    title: "纯陀螺仪方案抵抗电机磁场干扰",
    body:
      "自研双JY901B六轴陀螺仪差分消磁算法，通过零漂观察、自适应安装、系数补偿融合与角度积分输出共同降低姿态漂移。",
    stats: [
      ["98.9%", "零漂抑制率"],
      ["35倍", "积分漂移降低"],
      ["0磁力计", "避开电机磁场干扰"],
    ],
    details: [
      ["解决痛点", "电机和金属结构会干扰地磁传感器，单陀螺仪长时间积分又容易产生累计漂移。"],
      ["工程方案", "把两个陀螺仪按差分关系安装，先观察零漂特性，再用补偿系数融合输出角度。"],
      ["落地价值", "提升底盘转向和机械臂姿态估计稳定性，减少长时间运行后的方向偏差。"],
    ],
    points: ["采集双IMU静态零漂与运动曲线", "建立差分补偿模型抑制共模漂移", "输出稳定角度供导航与控制模块调用"],
    gallery: [
      ["assets/images/gyro-curve.webp", "双陀螺仪差分算法曲线", "红蓝曲线为两个IMU漂移，绿色融合曲线显示差分算法对零漂的抑制效果。"],
      ["assets/images/gyro-mount-1.webp", "陀螺仪安装示意一", "PPT中的安装示意图，用于说明双IMU差分布置的空间关系。"],
      ["assets/images/gyro-mount-2.webp", "陀螺仪安装示意二", "Z轴方向示意图展示差分算法所依赖的轴向布置。"],
      ["assets/images/gyro-mount-3.webp", "陀螺仪安装示意三", "另一视角展示安装策略，帮助解释算法如何规避磁场干扰。"],
    ],
  },
  agent: {
    label: "端侧Agent智能控制",
    title: "自然语言到硬件执行的总控大脑",
    body:
      "Agent将用户指令拆解成可执行步骤，协调视觉、导航、机械臂、健康监测与UI反馈，让机器人从被动响应走向自主完成任务。",
    stats: [
      ["2-3倍", "重复任务加速"],
      ["60%", "Token消耗降低"],
      ["ARM64", "端侧部署目标"],
    ],
    details: [
      ["解决痛点", "传统规则引擎只能执行固定命令，复杂指令需要用户分步操作，不适合老人和照护场景。"],
      ["工程方案", "Kimi k2与DeepSeek双引擎理解意图，Skill系统沉淀任务步骤，端侧控制层负责硬件调用。"],
      ["落地价值", "用户只需说“把水杯拿过来”这类自然语言，系统自动规划识别、导航、抓取和反馈。"],
    ],
    points: ["识别自然语言意图并拆解任务", "调用视觉、导航、机械臂和健康监测技能", "执行后沉淀Skill，下次同类任务更快完成"],
    gallery: [
      ["assets/images/agent-system.webp", "Agent系统运行界面", "系统运行状态界面展示Agent与工具链的协同。"],
      ["assets/images/agent-terminal.webp", "Agent终端日志", "终端日志用于展示端侧任务调用、工具执行和调试状态。"],
      ["assets/images/agent-skills.webp", "Agent技能矩阵", "技能矩阵展示重复任务学习、任务分解和工具调用的覆盖情况。"],
    ],
  },
  health: {
    label: "毫米波雷达健康监测",
    title: "无需佩戴，24小时无感守护",
    body:
      "FMCW毫米波雷达可穿透衣物被褥，监测呼吸与心跳，不采集隐私图像，并在异常时自动报警。",
    stats: [
      ["24h", "全天候无感监测"],
      ["±0.5次/分", "呼吸频率误差"],
      ["<2%", "心跳频率误差"],
    ],
    details: [
      ["解决痛点", "手环、贴片等设备依赖佩戴习惯，摄像头又涉及隐私，老人夜间监测尤其容易缺失。"],
      ["工程方案", "通过毫米波微动信号提取胸腔起伏与心跳特征，结合异常阈值触发提醒和报告。"],
      ["落地价值", "覆盖独居老人、失能老人和睡眠呼吸暂停高风险人群，为家属提供连续健康信号。"],
    ],
    points: ["雷达采集人体微动回波", "算法分离呼吸和心跳频段", "异常趋势同步到UI与紧急联系人"],
    gallery: [
      ["assets/images/breath-curve.webp", "毫米波雷达呼吸曲线", "呼吸曲线展示雷达从胸腔微动中提取周期信号的效果。"],
      ["assets/images/heart-curve.webp", "毫米波雷达心跳监测曲线", "心跳曲线用于验证非接触生命体征监测的细粒度信号。"],
      ["assets/images/radar-board.webp", "毫米波雷达传感器与开发板", "硬件模块可接入移动平台，实现无佩戴、无图像隐私风险的健康监测。"],
    ],
  },
};

function bootIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setGalleryImage(panel, gallery, index) {
  const [src, alt, caption] = gallery[index];
  const image = panel.querySelector("[data-tech-image]");
  image.src = src;
  image.alt = alt;
  panel.querySelector("[data-tech-caption]").textContent = caption;

  panel.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.classList.toggle("active", Number(button.getAttribute("data-gallery-index")) === index);
  });
}

function renderTechGallery(panel, gallery) {
  const thumbs = panel.querySelector("[data-tech-thumbs]");
  thumbs.replaceChildren(
    ...gallery.map(([src, alt], index) => {
      const button = document.createElement("button");
      button.className = `tech-thumb${index === 0 ? " active" : ""}`;
      button.type = "button";
      button.setAttribute("data-gallery-index", String(index));
      button.setAttribute("aria-label", `查看${alt}`);
      const image = document.createElement("img");
      image.src = src;
      image.alt = `${alt}缩略图`;
      button.append(image);
      button.addEventListener("click", () => setGalleryImage(panel, gallery, index));
      return button;
    })
  );

  setGalleryImage(panel, gallery, 0);
}

function renderTechPanel(data, panel) {
  panel.querySelector(".panel-label").textContent = data.label;
  panel.querySelector("h3").textContent = data.title;
  panel.querySelector(".panel-body").textContent = data.body;

  panel.querySelector("[data-tech-stats]").replaceChildren(
    ...data.stats.map(([value, label]) => {
      const item = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = value;
      item.append(strong, label);
      return item;
    })
  );

  panel.querySelector("[data-tech-details]").replaceChildren(
    ...data.details.map(([title, body]) => {
      const card = document.createElement("article");
      card.className = "tech-detail";
      const heading = document.createElement("span");
      heading.textContent = title;
      const paragraph = document.createElement("p");
      paragraph.textContent = body;
      card.append(heading, paragraph);
      return card;
    })
  );

  panel.querySelector(".clean-list").replaceChildren(
    ...data.points.map((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      return li;
    })
  );

  renderTechGallery(panel, data.gallery);
}

function setupTechTabs() {
  const buttons = Array.from(document.querySelectorAll("[data-tech-tab]"));
  const panel = document.querySelector("[data-tech-panel]");
  if (!buttons.length || !panel) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-tech-tab");
      const data = techData[key];
      if (!data) return;

      buttons.forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-selected", String(item === button));
      });

      renderTechPanel(data, panel);
    });
  });

  renderTechPanel(techData.grip, panel);
}

document.addEventListener("DOMContentLoaded", () => {
  bootIcons();
  setupNav();
  setupTechTabs();
});
