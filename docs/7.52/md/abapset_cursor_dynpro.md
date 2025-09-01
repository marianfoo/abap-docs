---
title: "SET CURSOR - Dynpro"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_shortref.htm) Syntax SET CURSOR   FIELD field LINE line DISPLAY OFFSET off    col lin  . Alternatives: 1. ... FIELD field LINE line DISPLAY O
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_dynpro.htm"
abapFile: "abapset_cursor_dynpro.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "abapset", "cursor", "dynpro"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) → 

SET CURSOR - Dynpro

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_shortref.htm)

Syntax

SET CURSOR *{* *{* FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Alternatives:

[1\. ... FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... col lin](#!ABAP_ALTERNATIVE_2@2@)

Effect

During [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") processing, this statement sets the cursor in the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") of the current [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"). The cursor can be positioned by entering a screen element after FIELD or by specifying an absolute position using col and lin. Outside of PBO processing, the cursor is positioned in the next [list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_list.htm) displayed on the screen.

If the statement SET CURSOR is not specified, the cursor is set according to the following hierarchy, depending on the definition of the dynpro:

1.  on the cursor position determined statically in the dynpro properties,
    
2.  on the first input field of the dynpro,
    
3.  on the first screen element of the dynpro,
    
4.  on the command field in the [system toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry").
    

The latter also applies if the command field in the system toolbar is not displayed.

Alternative 1

... FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]*

Effect

The cursor is positioned on the screen element whose name is contained in uppercase letters in field. The data object field must be character-like and [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry"). The screen layout or a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") is scrolled in the display so that the screen element on which the cursor is positioned is visible. If the specified screen element is not found, the statement is ignored.

If the specified screen element is part of a table control or a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the row of the table control or group of the step loop in which the cursor is positioned on the specified screen element must be specified using the addition LINE. The data object line expects the type i. If there is no row or group for the value of line, or the addition LINE is not specified, the statement is ignored. The statement is also ignored if the addition LINE is specified and the screen element is not part of a table control or step loop.

If the addition OFFSET is not specified, the cursor is set to the first position of the screen element. Using the addition OFFSET, the cursor can be set to the position in a screen element entered in off. The position of the cursor is only visible in input/output fields. In other screen elements, the whole element is selected. The data object off expects the type i. If the value of off is greater than the length of the screen element, the addition is ignored. If the value of off is negative, the cursor is positioned at the end of the screen element. The addition DISPLAY is standard and can be omitted.

Alternative 2

... col lin

Effect

The cursor is positioned in the column specified in col and the row specified in lin in the screen, if a screen element exists in this position that is not part of a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or [tabstrip control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentabstrip_control_glosry.htm "Glossary Entry"). col and lin expect data objects of the type i. The counting of the columns starts at 2. If the screen element is not an input/output field, the whole element is selected. If no screen element is available at the specified positions, or if the cursor is positioned in a table control or tabstrip control, or if negative values are entered in col or lin, the statement is ignored.

Continue
![Example](exa.gif "Example") [Screens, Determinig the Cursor Position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_set_cursor_abexa.htm)