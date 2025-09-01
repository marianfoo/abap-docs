---
title: "MODULE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule_shortref.htm) Syntax MODULE mod OUTPUTINPUT. ... ENDMODULE. Addition: ... OUTPUTINPUT(#!ABAP_ONE_ADD@1@) Effect The statement MODULE defines a dialog module(https://help.sap.com/do
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm"
abapFile: "abapmodule.htm"
keywords: ["do", "if", "try", "method", "data", "abapmodule"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_module.htm) → 

MODULE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule_shortref.htm)

Syntax

MODULE mod *{*OUTPUT*|**\[*INPUT*\]**}*.
  ...
ENDMODULE.

Addition:

[... OUTPUT*|**\[*INPUT*\]*](#!ABAP_ONE_ADD@1@)

Effect

The statement MODULE defines a [dialog module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_module_glosry.htm "Glossary Entry") mod. The [naming conventions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm) apply to the name mod. The functions of a dialog module mod are implemented between the statements MODULE ad ENDMODULE.

A dialog module is called using the [MODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpmodule.htm) statement with the same name of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") of any ABAP program [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry").

Addition

... OUTPUT*|**\[*INPUT*\]*

Effect

The additions OUTPUT and INPUT determine whether the dialog module can be called for the [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") event or for the [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") event. The addition INPUT is the default and can therefore also be omitted, although this is not recommended for the readability of the program. Two dialog modules with the same name can be defined in a program, if one of them has the addition OUTPUT and the other has the addition INPUT. This is also not recommended for reasons of readability.

Note

For data encapsulation reasons, it is recommended that very few functions are implemented in dialog modules and that [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") are called instead.

Example

PAI module for a dynpro with the dynpro number 100. The PAI module calls an instance method of a dedicated object and does not implement any functions.

MODULE user\_command\_0100 INPUT.
  screen\_handler->user\_command( ).
ENDMODULE.