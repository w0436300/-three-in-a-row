Testing Strategy for Three-in-a-Row Game Application
 
Introduction
An interactive web-based puzzle game that allows users to play a "three-in-a-row" game, with functionality including starting/stopping a timer, checking puzzle correctness, and refreshing the game for a new puzzle.
 
1. Overall strategy
 
1.1 Manual Testing:
 
​PURPOSE:Ensure the application doesn’t have big issue before in-​depth test
 
​SCOOP:User interface and user experience elements such as ​​responsiveness of buttons (Start time, Stop time, Check Puzzle, ​​Random 6*6 12*12 18*18) and visual feedback when interacting with ​grid squares.
 
​METHOD:Testers will manually interact with the game, focusing on ​visual feedback, button responsiveness, and accessibility features.
 
​TOOLS:Selenium for automating browser actions during manual test ​scenarios.
 
TIMING: At the beginning of each cycle. Approximately 20 manual tests.
 
1.2 Automated Testing:
 
​PURPOSE:Game logic, state transitions, puzzle validation, and timer ​functionality.
 
​SCOOP:Functions that handle game logic, such as the transition of ​square states, puzzle validation (checkPuzzle function), and the timer ​functionality, will be tested using automated scripts
 
​METHOD:use Jest for automated unit and integration tests
 
​TOOLS: Jest,
 
TIMING: Around 40 automated tests.
 
 
2. Strategy for Performance tesing
 
2.1 Use Cases for Testing:
Load testing to simulate multiple users interacting with the game ​simultaneously
Stress testing to determine the application's limits in terms of ​maximum grid size and rapid sequential actions.
 
2.2 Tools:
Apache JMeter for load testing and Google Lighthouse for frontend performance evaluation.
 
2.3 Timeframe:
One week. Critical pieces include ensuring the game's responsiveness and stability under high load and during prolonged use.
​
3. Strategy for Security Tes4ng (high-level)
3.1 API Security:Assess the security of APIs used within the game to ensure they are protected against unauthorized access, injection attacks, and data exposure.
 
3.2 Security Headers and Configuration:
​
4. Quality Guarantee
​This strategy encompasses a comprehensive range of tests to cover ​​functional and non-functional requirements, ensuring the application is user-​friendly, secure, and performs optimally.
 
5. Integration into a QMS
 
5.1 Process: Incorporate feedback from testing outcomes to identify improvement areas, applying the Plan-Do-Check-Act cycle for continuous quality improvement.
 
5.2 Documentation: Maintain detailed records of test plans, results, and improvement actions for each release cycle.
 
6. CI/CD Pipeline Integration
 
6.1 Unit Tests:
1) Fetch Game Data Test
2) Check Puzzle Test
3) Get Color From State Test
4) Get Color From State Click Test
5) Timer Test
 
6.2 Reason
These tests cover key aspects of game functionality, including data acquisition, puzzle evaluation, visual feedback, user interaction, and time tracking. By thoroughly testing these components, we ensure the game runs smoothly and accurately evaluates user actions.
 
