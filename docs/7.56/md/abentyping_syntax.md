---
title: "Syntax"
description: |
  ... generic_type(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_generic.htm)  complete_type(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_complete.htm)  ... Effect The addition typing is part of the definition of formal parameters and field sym
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_syntax.htm"
abapFile: "abentyping_syntax.htm"
keywords: ["do", "if", "try", "method", "class", "types", "field-symbol", "abentyping", "syntax"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping.htm) → 

typing Addition

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_shortref.htm)

Syntax

... [generic\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_generic.htm) *|* [complete\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_complete.htm)  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm)
-   [*\[*CLASS-*\]*EVENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm)
-   [FORM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapform.htm)
-   [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-symbols.htm)

The addition allows generic typing with [generic\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_generic.htm) and complete typing with [complete\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_complete.htm). In positions where the addition typing does not have to be specified, implicit typing with the generic type [any](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) takes place if no typing is specified explicitly.

Hints

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in the [Class Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in the Function Builder or Class Builder, only the types in the ABAP Dictionary may be referenced.
-   For more information about typing parameters of function modules, see [Function Module Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_parameters.htm).
-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters of the same procedure that have already been declared.

Continue
[typing Addition, generic\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_generic.htm)
[typing Addition, complete\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_complete.htm)