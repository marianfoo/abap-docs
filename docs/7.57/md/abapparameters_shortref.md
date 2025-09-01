---
title: "PARAMETERS - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm) Syntax PARAMETERS  para(len)  para LENGTH len   TYPE type DECIMALS dec  LIKE dobj  LIKE (name)   OBLIGATORYNO-DISPLAY
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_shortref.htm"
abapFile: "abapparameters_shortref.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapparameters", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  P

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PARAMETERS, ABAPPARAMETERS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

PARAMETERS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm)

Syntax

PARAMETERS *{* *{*para*\[*(len)*\]**}* *|* *{*para *\[*LENGTH len*\]**}* *}*
           *\[* *{*TYPE type *\[*DECIMALS dec*\]**}*
           *|* *{*LIKE dobj*}*
           *|* *{*LIKE (name)*}* *\]*
           *\[* *{**\[*OBLIGATORY*|*NO-DISPLAY*\]* *\[*VISIBLE LENGTH vlen*\]**}*
           *|* *{*AS CHECKBOX *\[*USER-COMMAND fcode*\]**}*
           *|* *{*RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]**}*
           *|* *{*AS LISTBOX VISIBLE LENGTH vlen
                *\[*USER-COMMAND fcode*\]* *\[*OBLIGATORY*\]**}* *\]*
           *\[*MODIF ID modid*\]*
           *\[*DEFAULT val*\]*
           *\[*LOWER CASE*\]*
           *\[*MATCHCODE OBJECT search\_help*\]*
           *\[*MEMORY ID pid*\]*
           *\[*VALUE CHECK*\]*
           *\[*FOR *{*TABLE*|*NODE*}* node
              *\[*HELP-REQUEST*\]*
              *\[*VALUE-REQUEST*\]*
              *\[*AS SEARCH PATTERN*\]**\]*.

Effect

Declares a parameter para of length len and creates an associated input field on the current [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions   

-   [TYPE type *\[*DECIMALS dec*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_type.htm)
    Specifies the data type type directly and defines the number of [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry").
-   [LIKE dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_type.htm)
    Specifies the data type with reference to a data object dobj.
-   [LIKE (name)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_type.htm)
    Defines the data type for c with length 132, and displays the input field in accordance with the type specified dynamically in name.
-   [OBLIGATORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Defines the input field as a mandatory field.
-   [NO-DISPLAY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    No input field is created on the selection screen.
-   [VISIBLE LENGTH vlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Sets the visible length of the input field to the value of vlen.
-   [AS CHECKBOX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Creates the input field as a checkbox.
-   [RADIOBUTTON GROUP group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Creates the input field as a radio button of the radio button group group.
-   [AS LISTBOX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Creates a [dropdown list box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendropdown_listbox_glosry.htm "Glossary Entry") for the input field.
-   [USER-COMMAND fcode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm)
    Links the input field with a [function code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_code_glosry.htm "Glossary Entry").
-   [MODIF ID modid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm)
    Assigns the input field to the [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.
-   [DEFAULT val](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm)
    Defines a [start value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") val for the content of the parameter.
-   [LOWER CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm)
    Prevents the conversion of the content of character-like fields to uppercase when transferring data between the input field and the data object.
-   [MATCHCODE OBJECT search\_help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm)
    Links the input field with a search help search\_help from [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
-   [MEMORY ID pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm)
    Links the input field with the [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") pid in the [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry").
-   [VALUE CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm)
    Checks the input value against type-specific requirements in ABAP Dictionary.
-   [FOR *{*TABLE*|*NODE*}* node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm)
    Obsolete: Assigns parameters in a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") to a node node of the associated structure.
-   [*\[*HELP-REQUEST*\]* *\[*VALUE-REQUEST*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm)
    Obsolete: Enables self-defined field helps and input helps in logical databases for the input field.
-   [AS SEARCH PATTERN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm)
    Obsolete: Enables evaluation of a search help in logical databases.