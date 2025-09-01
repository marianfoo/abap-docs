# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Dialog Modules

Included pages: 3


### abendialog_module.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) → 

Dialog Modules

Dialog modules help prepare and process [screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") of [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm)
  ...
[ENDMODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendmodule.htm)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all following processing blocks. A dialog module works with the global data types and data objects of the [master program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenframe_program_glosry.htm "Glossary Entry") and therefore should not contain its own declarations.

Continue
[MODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm)
[ENDMODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendmodule.htm)


### abapmodule.htm

  

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


### abapendmodule.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_module.htm) → 

ENDMODULE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule_shortref.htm)

Syntax

ENDMODULE.

Effect

The statement ENDMODULE closes a module definition introduced using [MODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm).
