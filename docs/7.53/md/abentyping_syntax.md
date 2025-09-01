  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping.htm) → 

typing Addition

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm)

Syntax

... [generic\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_generic.htm) *|* [complete\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_complete.htm)  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm)

-   [*\[*CLASS-*\]*EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm)

-   [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm)

-   [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-symbols.htm)

The addition allows generic typing with [generic\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_generic.htm) and full typing with [complete\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_complete.htm). In positions where the addition typing is not necessary, implicit typing with the generic type [any](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm) takes place (if no typing is specified explicitly).

Notes

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in [Class Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in Function Builder or Class Builder, only the types in ABAP Dictionary may be used.

-   More information about typing parameters of function modules can be found under [Function Module Interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_parameters.htm).

Continue
[Typing Addition - generic\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_generic.htm)
[typing - Addition - complete\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_complete.htm)