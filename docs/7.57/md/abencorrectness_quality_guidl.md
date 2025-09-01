---
title: "Correctness and Quality"
description: |
  Background Most organizations that develop professional software have product standards that must be adhered to. These product standards define what is meant by correctness and quality of a program. SAP has many such standards, which development departments have to comply with. The current product s
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorrectness_quality_guidl.htm"
abapFile: "abencorrectness_quality_guidl.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abencorrectness", "quality", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [General Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_rules_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Correctness and Quality, ABENCORRECTNESS_QUALITY_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Correctness and Quality

Background   

Most organizations that develop professional software have product standards that must be adhered to. These product standards define what is meant by correctness and quality of a program. SAP has many such standards, which development departments have to comply with. The current product standards that are most important to developers are listed below:

-   Accessibility
    
    In the information technology environment, the term accessibility relates to the requirement that anyone, including and especially those with impairments, can access and use information technology products. To make products such as software or websites accessible to all consumers, they must be created and designed so that they can still be used if users have a particular impairment (for example, visual impairment, color blindness) and must be compatible with technologies such as screen readers and screen magnifiers.
    
-   Documentation
    
    As a rule, a product standard for documentation defines which documents have to be shipped to the consumer with the product and ensures that the documentation supplied is consistent, correct, and up to date across all product areas.
    
-   Functional Correctness
    
    The functional correctness of software is generally seen as its most important quality. Software that is not functionally correct is usually unusable. As a rule, a product standard for functional correctness requires software to be error-free, and defines the stability of interfaces and program behavior during upgrades. To reach these goals, thorough testing of the software may be made compulsory.
    
-   Globalization
    
    If software is to be used worldwide, a product standard for globalization is usually necessary. This covers the aspects of internationalization and localization.
    
    -   Internationalization
        
        Internationalization comprises the technical aspects of globalization such as Unicode compatibility, text processing, screen display, printing, data exchange, time zones, translatability, and so on, and thus sets out the technical prerequisites for localization. The translation of user interfaces and other texts is also, of course, an important aspect of internationalization.
        
    -   Localization
        
        Localization is necessary if software for global use has to be adapted to local (usually country-specific) conditions, such as legal requirements or particular business procedures.
        
-   Performance
    
    Even if a program is functionally correct, it is of little or no use to a user if it cannot be executed in a reasonable time. A performance product standard ensures that this aspect is not neglected. It can include, for example, rules for efficient database access and scalability of application logic.
    
-   Security
    
    Where security is critical to software, and this is generally the case for any type of business software, a product standard for security sets out all security-relevant aspects of a product, by pointing out any potential security gaps or legal requirements, for example, and also contains instructions for meeting the standard.
    
-   Usability
    
    The term usability refers to the adaptation of user interfaces to the requirements of human end users and their tasks. A usability product standard should ensure that end users can perform their tasks efficiently and effectively. Key aspects of usability include consistency of user interfaces, ease of use, intuitive task-friendly and role-friendly interfaces, individual adaptability, error tolerance, and so on.
    

Although these standards are, in part, legal requirements, they essentially arise from the fundamental aim to guarantee the correctness and quality of the software that is shipped to consumers. Programming guidelines are very important in this respect. Many of the guidelines listed here support, directly or indirectly, one of the standards mentioned or are derived from them. They support and ensure compliance with such standards, resulting in correct, high-quality programs. The programming guidelines themselves could even be said to be on a par with binding product standards.

However, since not all possible product standards can be covered by the programming guidelines, for example all rules of a performance or security standard, we set out the following basic rule.

Rule   

Comply with or check compliance with existing product standards

Adhere to the product standards that exist in your organization, and ensure the correctness and quality of your programs by testing them during development and after completion with all the test tools at your disposal.

Details   

It is obvious that you must comply with product standards; this needs no further explanation. However, it is often forgotten that the static and dynamic analysis tools that are available in the ABAP development environments can provide invaluable help for compliance with important product standards, particularly standards for functional correctness and performance. Therefore, as part of this basic rule we recommend that you use all available tools that help to ensure the correctness and quality of ABAP programs.

-   Perform the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_guidl.htm "Guideline") (transaction SLIN) on a regular basis and correct all messages.
-   Use the [Code Inspector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencode_inspector_guidl.htm "Guideline") tool (transaction SCI) on a regular basis using the standard check variant, and correct all messages.
-   Check the usability and accessibility of your interface elements by using the appropriate tools (integrated into the workbench tools and [ABAP Test Cockpit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap-testcockpit_guidl.htm "Guideline")).
-   Cover all functions of your procedural units by using units tests with ABAP Unit (integrated into ABAP Workbench, Code Inspector, and ABAP Test Cockpit).
-   Cover all functions of your applications by using scenario tests with eCATT (transaction SECATT).
-   Check the memory consumption of your programs by using ABAP Memory Inspector (transaction S\_MEMORY\_INSPECTOR and the memory analysis function integrated into ABAP Debugger).
-   Check the runtime behavior and the performance. In SAP GUI use the ABAP runtime analysis (transaction SAT) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") use the ABAP Profiler.
-   Check the test coverage by using Coverage Analyzer (transaction SCOV and integrated into ABAP Unit Browser of ABAP Workbench).
-   Follow the [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm) to protect your programs and data from attacks from outside.
-   Document your programs and services using all available means: Starting with [comments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomments_gdl.htm), this ranges from simple data element documentation for context-sensitive input help, to class and method documentation for documenting APIs, to explanations of concepts and tutorials in other repositories such as SAP Knowledge Warehouse, or on the Internet, for example in the SAP Community (https://community.sap.com/).

[ABAP Test Cockpit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencts_glosry.htm "Glossary Entry") (ATC) integrated into ABAP Workbench and the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencts_glosry.htm "Glossary Entry") supports the execution and evaluation of the most important tests. Some of these tests also check compliance with some of the rules of the ABAP programming guidelines discussed later.

Hint

Where in doubt, product standards take precedence over the guidelines and recommendations of this documentation. If, for example, performance or security aspects prohibit any of the programming practices presented here, compliance with the standard takes priority.

Good Example

Executing unit tests for classes of the package SABAP\_DEMOS\_CAR\_RENTAL\_APPL and displaying the results in ABAP Unit Browser of Object Navigator gives a test coverage of 100%. This package is shipped as a subpackage for the application part of a small example application, which, in addition to unit tests, also demonstrates strict adherence to the [separation of concerns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenseperation_concerns_guidl.htm "Guideline").