import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ChaimCymermanWebsite() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Chaim Cymerman</h1>
        <p className="text-lg text-gray-600">Full-Stack Developer</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:chaimcymerman0548492309@gmail.com" className="flex items-center gap-1 text-blue-600">
            <Mail size={18} /> Email
          </a>
          <a href="tel:+972548492309" className="flex items-center gap-1 text-blue-600">
            <Phone size={18} /> +972 54-849-2309
          </a>
          <a href="https://www.linkedin.com/in/chaim-cymerman-94961423a/" target="_blank" className="flex items-center gap-1 text-blue-600">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/ChaimCymerman0548492309" target="_blank" className="flex items-center gap-1 text-blue-600">
            <Github size={18} /> GitHub
          </a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
          <li><b>Languages:</b> TypeScript, JavaScript, Python, Java, HTML, CSS</li>
          <li><b>Frameworks:</b> React, Angular, Node.js, Nest.js</li>
          <li><b>Databases:</b> MSSQL, MongoDB, PostgreSQL, Redis</li>
          <li><b>Tools:</b> Git, Docker, OpenShift, VS Code, S3</li>
          <li><b>APIs:</b> RESTful APIs, GraphQL</li>
          <li><b>Testing:</b> Cypress</li>
          <li><b>Architecture:</b> Microservices, OOP</li>
          <li><b>Soft Skills:</b> Teamwork, Quick learner, Customer service</li>
          <li><b>OS:</b> Windows, Linux</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <div>
              <h3 className="font-bold">Student Management Dashboard</h3>
              <p>React + Node.js platform for tracking attendance, grades, and reports in educational environments. Integrated with Jotai for state and supports multi-language UI.</p>
              <a href="https://github.com/ChaimCymerman0548492309/student-dashboard" target="_blank" className="text-blue-600 inline-flex items-center gap-1">
                <ExternalLink size={16} /> View on GitHub
              </a>
            </div>
            <div>
              <h3 className="font-bold">Task Drag-and-Drop System</h3>
              <p>Built using React and react-beautiful-dnd for multi-item drag-and-drop. Supports dynamic box creation, selection toggles, and task state management.</p>
              <a href="https://github.com/ChaimCymerman0548492309/task-dnd" target="_blank" className="text-blue-600 inline-flex items-center gap-1">
                <ExternalLink size={16} /> View on GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">Software Developer - Unit 8200, IDF Intelligence Directorate (2023 - Present)</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Developed systems using Node.js and React</li>
              <li>Designed and maintained backend APIs</li>
              <li>Created and implemented database schemas</li>
              <li>Worked in Agile teams across disciplines</li>
              <li>Participated in system architecture planning</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside">
          <li>Practical Software Engineering, College of Management, Petah Tikva (2024 - Present)</li>
          <li>Military Technical Course (2023)</li>
          <li>Graduated in Math, English, and Computer Science (2023)</li>
          <li>High Yeshiva Torah Studies, Yeshivat Meirat Shemu'a (2016 - 2022)</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        References available upon request
      </footer>
    </div>
  );
}
