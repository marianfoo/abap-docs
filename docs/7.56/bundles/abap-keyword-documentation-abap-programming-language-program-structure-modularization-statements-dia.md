# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Dialog Modules

Included pages: 3


### abendialog_module.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) → 

Dialog Modules

Dialog modules help prepare and process [screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") of [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodule.htm)
  ...
[ENDMODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendmodule.htm)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all subsequent processing blocks. A dialog module works with the global data types and data objects of the [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and should therefore not contain its own declarations.

Continue
[MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodule.htm)
[ENDMODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendmodule.htm)


### abapmodule.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_module.htm) → 

MODULE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodule_shortref.htm)

Syntax

MODULE mod *{*OUTPUT*|**\[*INPUT*\]**}*.
  ...
ENDMODULE.

Addition:

[... OUTPUT*|**\[*INPUT*\]*](#!ABAP_ONE_ADD@1@)

Effect

The statement MODULE defines a [dialog module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_module_glosry.htm "Glossary Entry") mod. The [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm) apply to the name mod. The functions of a dialog module mod are implemented between the statements MODULE ad ENDMODULE.

A dialog module is called using the identically named statement [MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpmodule.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") of any [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") in the ABAP program.

Addition   

... OUTPUT*|**\[*INPUT*\]*

Effect

The additions OUTPUT and INPUT determine whether the dialog module can be called at the [PBO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpbo_glosry.htm "Glossary Entry") or [PAI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpai_glosry.htm "Glossary Entry") event. The addition INPUT is the default and could therefore also be omitted, although this is not recommended for reasons of program readability. Two dialog modules with the same name can be defined in a program, if one of them has the addition OUTPUT and the other has the addition INPUT. However, this is also not recommended for reasons of readability.

Hint

For reasons of data encapsulation, it is recommended that very few functions are implemented in dialog modules and that [procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") are called instead.

Example

PAI module for a dynpro with the dynpro number 100. In the PAI module, no functionality is implemented and an instance method of an object is called instead.

MODULE user\_command\_0100 INPUT.
  screen\_handler->user\_command( ).
ENDMODULE.


### abapendmodule.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_module.htm) → 

ENDMODULE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodule_shortref.htm)

Syntax

ENDMODULE.

Effect

The statement ENDMODULE closes a module definition introduced using [MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodule.htm).
