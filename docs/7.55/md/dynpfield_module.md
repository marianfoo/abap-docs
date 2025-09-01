---
title: "Syntax"
description: |
  FIELD dynp_field MODULE mod  ON INPUT  ON REQUEST  ON -INPUT  ON CHAIN-INPUTCHAIN-REQUEST  AT CURSOR-SELECTION . Additions: 1. ... ON INPUT(#!ABAP_ADDITION_1@1@) 2. ... ON REQUEST(#!ABAP_ADDITION_2@2@) 3. ... ON -INPUT(#!ABAP_A
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpfield_module.htm"
abapFile: "dynpfield_module.htm"
keywords: ["select", "do", "if", "try", "data", "types", "dynpfield", "module"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpfield.htm) → 

dynpro - FIELD, MODULE

Syntax

FIELD dynp\_field MODULE mod *\[* *{*ON INPUT*}*
                            *|* *{*ON REQUEST*}*
                            *|* *{*ON \*-INPUT*}*
                            *|* *{*ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}**}*
                            *|* *{*AT CURSOR-SELECTION*}* *\]*.

Additions:

[1\. ... ON INPUT](#!ABAP_ADDITION_1@1@)
[2\. ... ON REQUEST](#!ABAP_ADDITION_2@2@)
[3\. ... ON \*-INPUT](#!ABAP_ADDITION_3@3@)
[4\. ... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*](#!ABAP_ADDITION_4@4@)
[5\. ... AT CURSOR-SELECTION](#!ABAP_ADDITION_5@5@)

Effect

After the statement FIELD in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), the dialog module mod can be specified at [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry") time using the statement MODULE. If the conditions ON or AT are not specified, the module is called immediately after the [data transport](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_field_data_transport.htm) specified in FIELD.

As well as two conditions in the regular [module call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm), special conditions for the call of the dialog module, related to the dynpro field dynp\_field, can be specified after FIELD.

Hint

The addition SWITCH of the standalone statement [MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm) cannot be used with the statement FIELD. Instead, the switch associated with the dynpro field in Screen Painter is used.

Addition 1

... ON INPUT

Effect

This condition specifies that the module mod is called only if the dynp\_field is not empty for a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") that is ready for input. All dynpro fields except fields of type STRING or SSTRING are considered empty if they contain nothing but blanks in the screen display. Dynpro fields of type STRING and SSTRING are considered empty if they do not contain any characters.

If the input field has the special attribute \*-Input and the user has entered an asterisk as the first character in the input field of the dynpro field dynp\_field, the condition ON INPUT is not met. Instead, the condition ON \*-INPUT is met (see below).

Hints

-   In the screen display, an empty field of type STRING or SSTRING is known clearly by the fact that the cursor can be positioned only at the beginning of the field.

-   Numeric fields that show initial value 0, or time fields that contain 000000 are for instance not empty.
    

Addition 2

... ON REQUEST

Effect

This condition specifies that the module mod is called only if the value of the [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") dynp\_field was modified by input after the event [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry"). This applies even when the existing input is overwritten with the same value or if the initial value of the field is entered explicitly. Besides user input, the following input values also produce a call of mod:

-   Applying a default value set using System → User Profile → Hold Data. This requires the dynpro property Hold Data to be active.

-   Applying a default value from the [User Memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenspa_gpa.htm). This requires that an SPA/GPA parameter is specified in the PARAMETER-ID property of a screen element.

-   Applying data passed when calling a dialog transaction using the addition USING of the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm).

-   Applying a default value predefined in the system or in ABAP Dictionary for input/output fields of certain types.

The module mod is also called if the component request of the [structure SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen.htm) was set to the value 1 at PBO time using [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_screen.htm).

Addition 3

... ON \*-INPUT

Effect

This condition specifies that the module mod is called only if the user entered an asterisk ("\*") as the first character in the input field of the dynpro field dynp\_field and if the input field has the special attribute \*-Input. The content of dynp\_field is passed to the ABAP program without the leading asterisk.

Addition 4

... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*

Effect

The conditions ON CHAIN-INPUT and ON CHAIN-REQUEST have the same meaning as if they were used after a standalone [MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm) statement.

Addition 5

... AT CURSOR-SELECTION

Effect

The condition AT CURSOR-SELECTION has the same meaning as if it were used after a standalone [MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm) statement.