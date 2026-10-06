import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";

export default function AboutZh() {
  return (
    <div className="max-w-4xl">

      {/* 研究兴趣 */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          学习兴趣
        </Heading>

        <Paragraph className="text-primary" max-w-lg leading-8>
          计算机视觉
          <br />
          普通物理
          <br />
          微波遥感
        </Paragraph>
      </section>

      {/* 经历 */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          教育经历
        </Heading>

        <div className="mt-6">
          <div className="flex items-start gap-4">

            {/* 学校 Logo */}
            <img
              src="/images/lzjtu-logo.png"
              alt="兰州交通大学"
              className="w-12 h-12 object-contain flex-shrink-0"
            />

            {/* 经历信息 */}
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-bold text-primary">
                  兰州交通大学 · 测绘与地理信息学院
                </p>

                <p className="text-secondary text-xs whitespace-nowrap">
                  2024 – 至今
                </p>
              </div>

              <p className="text-secondary text-sm mt-1">
                工学学士 · 遥感科学与技术
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 获奖 */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          获奖
        </Heading>

        <div className="mt-6 space-y-4">

          <div className="flex items-baseline justify-between gap-4">
            <p className="text-primary">
              兰州交通大学三好学生奖学金
            </p>

            <p className="text-secondary text-xs whitespace-nowrap">
              2026
            </p>
          </div>

          <div className="flex items-baseline justify-between gap-4">
            <p className="text-primary">
              兰州交通大学一等奖学金
            </p>

            <p className="text-secondary text-xs whitespace-nowrap">
              2025
            </p>
          </div>

        </div>
      </section>

      {/* 正在学习 */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          当前学习（大三上）
        </Heading>

        <div className="mt-6 space-y-2">
          <p>数字摄影测量</p>
          <p>LiDAR 遥感</p>
          <p>遥感图像处理算法</p>
          <p>GNSS 原理与应用</p>
          <p>误差理论与测量平差</p>
          <p>无人机工程监测</p>
          <p>物理实验培训</p>

          <p>
            <span className="text-blue-600 italic">非正式： </span>
            机器学习、遥感物理基础
          </p>
        </div>
      </section>

      {/* 过往学期 */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          过往学期（部分）
        </Heading>

        <div className="mt-6 space-y-3">

          {/* 2025-2026 */}
          <details className="group border-b border-neutral-200 pb-3">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2">
              <span className="font-bold text-primary">
                2025–2026（大二）
              </span>

              <span className="text-secondary text-sm transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>

            <div className="mt-4 ml-1 space-y-6 text-sm text-secondary">

              <div>
                <div className="space-y-2">
                  <p>概率与数理统计</p>
                  <p>程序设计基础（C#）</p>
                  <p>Python 程序设计</p>
                  <p>数据结构与算法</p>
                  <p>GIS 应用软件开发</p>
                  <p>遥感原理及应用</p>
                  <p>GIS 原理及应用</p>
                  <p>遥感数字图像处理</p>
                  <p>摄影测量学</p>
                  <p>计算机地图制图</p>
                  <p>地图学</p>
                  <p>交通工程测量</p>

                  <p>
                    <span className="text-blue-600 italic">
                      旁听：
                    </span>
                    英语听力（外教）
                  </p>
                </div>
              </div>

            </div>
          </details>

          {/* 2024-2025 */}
          <details className="group border-b border-neutral-200 pb-3">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2">
              <span className="font-bold text-primary">
                2024–2025（大一）
              </span>

              <span className="text-secondary text-sm transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>

            <div className="mt-4 ml-1 space-y-6 text-sm text-secondary">

              <div>
                <div className="space-y-2">
                  <p>高等数学</p>
                  <p>线性代数</p>
                  <p>大学物理</p>
                  <p>大学物理实验</p>
                  <p>测绘科学导论</p>
                  <p>测量学基础</p>
                </div>
              </div>

            </div>
          </details>

        </div>
      </section>

    </div>
  );
}