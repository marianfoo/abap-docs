  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Dialog Modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODULE, ABAPMODULE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

MODULE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodule_shortref.htm)

Syntax

MODULE mod *{*OUTPUT*|**\[*INPUT*\]**}*.
  ...
ENDMODULE.

Addition:

[... OUTPUT*|**\[*INPUT*\]*](#!ABAP_ONE_ADD@1@)

Effect

The statement MODULE defines a [dialog module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_glosry.htm "Glossary Entry") mod. The [naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the name mod. The functions of a dialog module mod are implemented between the statements MODULE ad ENDMODULE.

A dialog module is called using the identically named statement [MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpmodule.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") of any [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") in the ABAP program.

Addition   

... OUTPUT*|**\[*INPUT*\]*

Effect

The additions OUTPUT and INPUT determine whether the dialog module can be called at the [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") or [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") event. The addition INPUT is the default and could therefore also be omitted, although this is not recommended for reasons of program readability. Two dialog modules with the same name can be defined in a program, if one of them has the addition OUTPUT and the other has the addition INPUT. However, this is also not recommended for reasons of readability.

Hint

For reasons of data encapsulation, it is recommended that very few functions are implemented in dialog modules and that [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") are called instead.

Example

PAI module for a dynpro with the dynpro number 100. In the PAI module, no functionality is implemented and an instance method of an object is called instead.

MODULE user\_command\_0100 INPUT.
  screen\_handler->user\_command( ).
ENDMODULE.