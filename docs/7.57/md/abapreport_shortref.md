  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: REPORT, ABAPREPORT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

REPORT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport.htm)

Syntax

REPORT rep *\[*NO STANDARD PAGE HEADING*\]*
           *\[*LINE-SIZE width*\]*
           *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*DEFINING DATABASE ldb*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Introduces an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") rep.

Additions   

-   [NO STANDARD PAGE HEADING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm)
    Suppresses the output of a [standard page header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_page_header_glosry.htm "Glossary Entry").
-   [LINE-SIZE width](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm)
    Sets the line width of lists of the program to width characters.
-   [LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm)
    Sets the page length of the basic list of the program to page\_lines and reserves footer\_lines footer lines.
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport.htm)
    Specifies a message class mid for short forms of MESSAGE.
-   [DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_defining.htm)
    Obsolete: Does not call an executable program, but calls the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") ldb instead.
-   [REDUCED FUNCTIONALITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm)
    This addition is only intended for the [PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm) statement in subroutine pools.