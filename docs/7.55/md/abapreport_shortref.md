---
title: "REPORT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm) Syntax REPORT rep NO STANDARD PAGE HEADING LINE-SIZE width LINE-COUNT page_lines(footer_lines) MESSAGE-ID mid DEFINING DATABASE ldb REDUCED FUNCTIONALITY.
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_shortref.htm"
abapFile: "abapreport_shortref.htm"
keywords: ["do", "if", "try", "class", "data", "abapreport", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  R

REPORT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)

Syntax

REPORT rep *\[*NO STANDARD PAGE HEADING*\]*
           *\[*LINE-SIZE width*\]*
           *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*DEFINING DATABASE ldb*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Introduces an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") rep.

Additions

-   [NO STANDARD PAGE HEADING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)
    Suppresses the output of a [standard page header](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_page_header_glosry.htm "Glossary Entry").
    

-   [LINE-SIZE width](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)
    Sets the line width of lists of the program to width characters.
    

-   [LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)
    Sets the page length of the basic list of the program to page\_lines and reserves footer\_lines footer lines.
    

-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)
    Specifies a message class mid for short forms of MESSAGE.
    

-   [DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_defining.htm)
    Obsolete: Does not call an executable program, but calls the [database program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") ldb instead.
    

-   [REDUCED FUNCTIONALITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)
    This addition is only intended for the [PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm) statement in subroutine pools.