---
title: "SELECTION-SCREEN INCLUDE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include.htm) Syntax SELECTION-SCREEN INCLUDE   PARAMETERS parameter OBLIGATORY OFF MODIF ID modid    SELECT-OPTIONS selcrit OBLIGATORY OFF NO INTERVA
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_incl_shortref.htm"
abapFile: "abapselection-screen_incl_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "incl", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN INCLUDE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include.htm)

Syntax

SELECTION-SCREEN INCLUDE *{* *{* PARAMETERS parameter
                             *\[*OBLIGATORY *\[*OFF*\]**\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* SELECT-OPTIONS selcrit
                             *\[*OBLIGATORY *\[*OFF*\]**\]*
                             *\[*NO INTERVALS *\[*OFF*\]**\]*
                             *\[*NO-EXTENSION *\[*OFF*\]**\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* COMMENT *\[*/*\]**\[*pos*\]*(len) text
                             *\[*FOR FIELD sel*\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                             *\[*USER-COMMAND fcode*\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* BLOCKS block *}* *}*
                         *\[*ID id*\]*.

Effect

Inherits screen elements from a different [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions

-   [PARAMETERS parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_param.htm)
    Inherits the screen elements from a parameter parameter.
    
-   [SELECT-OPTIONS selcrit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_selop.htm)
    Inherits the screen elements from a [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit.
    
-   [COMMENT *\[*/*\]**\[*pos*\]*(len) text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_comnt.htm)
    Inherits an output field in the position specified in pos and len.
    
-   [PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text *\[*USER-COMMAND fcode*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_pushb.htm)
    Inherits a pushbutton in the position specified in pos and len. The [function code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_code_glosry.htm "Glossary Entry") is either inherited or specified as fcode.
    
-   [BLOCKS block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_block.htm)
    Inherits a block block or a [tabstrip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentabstrip_control_glosry.htm "Glossary Entry") area with all its elements.
    
-   [*\[*OBLIGATORY *\[*OFF*\]**\]* *\[*N INTERVALS *\[*OFF*\]**\]* *\[*MODIF ID modid*\]* *\[*FOR FIELD sel*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_selop.htm)
    Overwrites the corresponding properties of the inherited element.
    
-   [ID id](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm)
    Defines an ID id with a maximum of three characters on a logical database for the inherited screen element.