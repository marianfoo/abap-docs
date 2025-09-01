# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Dialog Modules

Included pages: 3


### abendialog_module.htm

---
title: "Dialog Modules"
description: |
  Dialog modules help prepare and process screens(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm 'Glossary Entry') of dynpros(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm 'Glossary Entry'). No local data types and data objects c
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module.htm"
abapFile: "abendialog_module.htm"
keywords: ["do", "if", "try", "data", "types", "abendialog", "module"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dialog%20Modules%2C%20ABENDIALOG_MODULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dialog Modules

Dialog modules help prepare and process [screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)
  ...
[ENDMODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendmodule.htm)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all subsequent processing blocks. A dialog module works with the global data types and data objects of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and should therefore not contain its own declarations.

Continue
[MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)
[ENDMODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendmodule.htm)


### abapmodule.htm

---
title: "MODULE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule_shortref.htm) Syntax MODULE mod OUTPUTINPUT. ... ENDMODULE. Addition: ... OUTPUTINPUT(#!ABAP_ONE_ADD@1@) Effect The statement MODULE defines a dialog module(https://help.sap.com/do
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm"
abapFile: "abapmodule.htm"
keywords: ["do", "if", "try", "method", "data", "abapmodule"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODULE%2C%20ABAPMODULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODULE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule_shortref.htm)

Syntax

MODULE mod *{*OUTPUT*|**\[*INPUT*\]**}*.
  ...
ENDMODULE.

Addition:

[... OUTPUT*|**\[*INPUT*\]*](#!ABAP_ONE_ADD@1@)

Effect

The statement MODULE defines a [dialog module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module_glosry.htm "Glossary Entry") mod. The [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to the name mod. The functions of a dialog module mod are implemented between the statements MODULE ad ENDMODULE.

A dialog module is called using the identically named statement [MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpmodule.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") of any [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") in the ABAP program.

Addition   

... OUTPUT*|**\[*INPUT*\]*

Effect

The additions OUTPUT and INPUT determine whether the dialog module can be called at the [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") or [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") event. The addition INPUT is the default and could therefore also be omitted, although this is not recommended for reasons of program readability. Two dialog modules with the same name can be defined in a program, if one of them has the addition OUTPUT and the other has the addition INPUT. However, this is also not recommended for reasons of readability.

Hint

For reasons of data encapsulation, it is recommended that very few functions are implemented in dialog modules and that [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") are called instead.

Example

PAI module for a dynpro with the dynpro number 100. In the PAI module, no functionality is implemented and an instance method of an object is called instead.

MODULE user\_command\_0100 INPUT.
  screen\_handler->user\_command( ).
ENDMODULE.


### abapendmodule.htm

---
title: "ENDMODULE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule_shortref.htm) Syntax ENDMODULE. Effect The statement ENDMODULE closes a module definition introduced using MODULE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm).
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendmodule.htm"
abapFile: "abapendmodule.htm"
keywords: ["do", "if", "abapendmodule"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDMODULE%2C%20ABAPENDMODULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDMODULE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule_shortref.htm)

Syntax

ENDMODULE.

Effect

The statement ENDMODULE closes a module definition introduced using [MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm).
