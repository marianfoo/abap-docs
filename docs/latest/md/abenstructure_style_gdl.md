---
title: "Structure and Style"
description: |
  This section covers all aspects of a program that have no direct affect on its functions. These aspects remain hidden to users when they use the program. However, structure and style are very significant for the traceability of the program flow by a human viewer. The source code must be designed in
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm"
abapFile: "abenstructure_style_gdl.htm"
keywords: ["do", "while", "if", "abenstructure", "style", "gdl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Structure%20and%20Style%2C%20ABENSTRUCTURE_STYLE_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Structure and Style

This section covers all aspects of a program that have no direct affect on its functions. These aspects remain hidden to users when they use the program. However, structure and style are very significant for the traceability of the program flow by a human viewer. The source code must be designed in such a way that a person other than the program developer can work with it properly. There are many situations in which this is necessary, for example:

-   A review or code inspection is taking place.
-   Another developer needs to examine the program to process an error message (hotline, development support).
-   The program has been completely transferred from the development department to the maintenance department, where it is maintained and possibly developed further.
-   A program that was delivered by an organization (for example, SAP) is to be modified or developed further in other organizations (for example, at SAP partners or customers).

A sound program structure and programming style is very important beyond these situations as well, because developers need to be able to quickly orient themselves in their code even if they have not worked on the program for a while.

Source code needs to be read and understood time and time again during the software lifecycle. In practice, it is not realistic for any program that contains more than a few lines that source code can be delivered just once and will require no further maintenance. As well as complying with general standards such as functional correctness and performance, a program must be developed in such a way that its source code meets the requirements of the human reader.

The following guidelines help produce comprehensible and traceable ABAP source codes. Of course, since beauty is in the eye of the beholder, opinions on style vary from individual to individual and are the topic of much discussion. For this reason, the following recommendations are limited to those issues for which there is general consensus. These are mostly generally accepted guidelines that often apply to any programming language. The aim here is not to dictate a specific programming style, but rather to ensure an appropriate programming style. A developer must feel at home with the own sources in order to work efficiently. Stringent style specifications can sometimes do more harm than good.

-   [Source Code Formatting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformatting_code_gdl.htm)
-   [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm)
-   [Comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomments_gdl.htm)
-   [Program and Procedure Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogr_proc_structure_gdl.htm)
-   [Source Code Organization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_orga_gdl.htm)
-   [Alternative Spellings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalternative_spelling_gdl.htm)
-   [Complexity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplexity_gdl.htm)

Continue
[Formatting the Source Code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformatting_code_gdl.htm)
[Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm)
[Comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomments_gdl.htm)
[Program Structure and Procedure Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogr_proc_structure_gdl.htm)
[Source Code Organization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_orga_gdl.htm)
[Alternative Spellings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalternative_spelling_gdl.htm)
[Complexity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplexity_gdl.htm)