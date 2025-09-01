  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformatting_code_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Line%20Width%2C%20ABENLINE_WIDTH_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Line Width

Background   

The maximum line width of an ABAP program is restricted to 255 characters.

Rule   

Do not use full line width

Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks.

Details   

Whereas the old restriction to 72 characters was too strict, the full utilization of the 255 characters that are now available would not make a program any more legible. Although very large monitors are now available, it can still be necessary, for example, for code inspections or reviews, to print a program or program section. It is therefore advisable to break long [statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatement_guidl.htm "Guideline") at suitable positions and to distribute long literals across multiple lines using the literal operator (&) or the concatenation operator (&&).

Note

The example programs in the documentation are restricted in width in a natural way, which makes them legible at the same time. Unfortunately this sometimes means using shorter [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline") than would actually be possible.

Example

In the first method of the program PGL\_PROGRAM\_LINE\_WIDTH, a very long literal is assigned to the return value. The literal is not displayed completely even on very wide screens, and in the printout it will be broken up or even truncated.

The second method uses a literal whose content is identical to the one of the previous method; here, however, it is composed of multiple shorter literals using the literal operator &. The literal is split at appropriate positions, and the method becomes more legible both on the screen and the printout.