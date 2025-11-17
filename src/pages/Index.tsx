import { Mail, Linkedin, Github, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import AchievementItem from "@/components/AchievementItem";

const Index = () => {
  const skills = [
    "C/C++",
    "Arduino (Programming & Prototyping)",
    "Mikrokontroler (ESP32, STM32)",
    "Sistem Tertanam (Embedded Systems)",
    "Rangkaian Elektronik",
    "Pemecahan Masalah (Problem Solving)",
    "Pengembangan Aplikasi CLI",
  ];

  const projects = [
    {
      title: "Sistem Monitoring Suhu dan Kelembaban Berbasis IoT",
      description:
        "Sistem monitoring real-time menggunakan sensor DHT22 dan ESP32 yang mengirimkan data ke platform cloud. Dilengkapi dengan alert otomatis dan visualisasi data grafis.",
      tags: ["C++", "Arduino", "IoT", "ESP32"],
    },
    {
      title: "Robot Lengan Otomatis Pemilah Barang",
      description:
        "Robot lengan 4-axis yang dapat memilah dan memindahkan objek berdasarkan warna menggunakan sensor warna TCS3200. Dikendalikan dengan Arduino Mega dan motor servo.",
      tags: ["C++", "Arduino", "Robotika", "Computer Vision"],
    },
    {
      title: "Aplikasi CLI Manajemen Tugas Sederhana",
      description:
        "Aplikasi command-line berbasis C++ untuk mengelola tugas harian dengan fitur CRUD, prioritas tugas, dan penyimpanan data lokal. Menggunakan struktur data teroptimasi.",
      tags: ["C++", "CLI", "Data Structures"],
    },
  ];

  const achievements = [
    {
      title: "Juara 1 - Lomba Karya Tulis Ilmiah Teknologi Nasional",
      year: "2024",
    },
    {
      title: "Finalis - Kompetisi Robotika Nasional KRCI",
      year: "2023",
    },
    {
      title: "Juara 2 - Hackathon IoT Regional",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Bagian Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from via-background to-hero-to opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Embedded Systems Enthusiast</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
            Halo, Saya [Nama Anda]
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-4 glow-text">
            Mahasiswa Teknik Elektro Semester 5
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Saya memiliki hasrat di bidang embedded systems dan mikrokontroler, dengan
            spesialisasi dalam pemrograman C/C++ untuk proyek Arduino dan IoT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
            >
              <a href="#projects">Lihat Proyek Saya</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-accent hover:bg-card hover:border-primary transition-all"
            >
              <a href="#contact">Hubungi Saya</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bagian Tentang Saya */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tentang Saya</h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Saya adalah mahasiswa Teknik Elektro di [Nama Universitas Anda] yang saat ini
              menempuh semester 5. Selama perjalanan akademik saya, saya telah mengembangkan
              ketertarikan yang mendalam pada sistem tertanam (embedded systems) dan teknologi
              mikrokontroler. Fokus utama saya adalah mengintegrasikan perangkat keras dengan
              perangkat lunak untuk menciptakan solusi teknologi yang inovatif dan efisien.
            </p>
            <p className="text-lg">
              Kemampuan saya dalam pemrograman C/C++ menjadi jembatan yang sempurna antara latar
              belakang Teknik Elektro dan pengembangan perangkat lunak. Saya secara konsisten
              mengaplikasikan pengetahuan pemrograman ini dalam proyek-proyek Arduino, ESP32, dan
              platform mikrokontroler lainnya. Pengalaman ini memungkinkan saya untuk memahami
              tidak hanya aspek teoritis, tetapi juga implementasi praktis dari sistem elektronik
              yang cerdas dan terhubung.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian Keahlian */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Keahlian Saya
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Proyek */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Proyek Unggulan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Pencapaian */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pencapaian Saya
          </h2>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <AchievementItem key={index} title={achievement.title} year={achievement.year} />
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Kontak */}
      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hubungi Saya</h2>

          <p className="text-lg text-muted-foreground mb-12">
            Saya terbuka untuk diskusi, kolaborasi, atau peluang magang di bidang embedded systems
            dan IoT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-accent hover:bg-card gap-2"
            >
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-accent hover:bg-card gap-2"
            >
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2024 [Nama Anda]. Dibuat dengan React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
