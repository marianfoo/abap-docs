---
title: "Line Width"
description: |
  Background The maximum line width of an ABAP program is restricted to 255 characters. Rule Do not use full line width Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_width_guidl.htm"
abapFile: "abenline_width_guidl.htm"
keywords: ["do", "if", "method", "abenline", "width", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformatting_code_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Line Width, ABENLINE_WIDTH_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

Line Width

Background   

The maximum line width of an ABAP program is restricted to 255 characters.

Rule   

Do not use full line width

Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks.

Details   

Whereas the old restriction to 72 characters was too strict, the full utilization of the 255 characters that are now available would not make a program any more legible. Although very large monitors are now available, it can still be necessary, for example, for code inspections or reviews, to print a program or program section. It is therefore advisable to break long [statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatement_guidl.htm "Guideline") at suitable positions and to distribute long literals across multiple lines using the literal operator (&) or the concatenation operator (&&).

Note

The example programs in the documentation are restricted in width in a natural way, which makes them legible at the same time. Unfortunately this sometimes means using shorter [names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentelling_names_guidl.htm "Guideline") than would actually be possible.

Example

In the first method of the program PGL\_PROGRAM\_LINE\_WIDTH, a very long literal is assigned to the return value. The literal is not displayed completely even on very wide screens, and in the printout it will be broken up or even truncated.

The second method uses a literal whose content is identical to the one of the previous method; here, however, it is composed of multiple shorter literals using the literal operator &. The literal is split at appropriate positions, and the method becomes more legible both on the screen and the printout.