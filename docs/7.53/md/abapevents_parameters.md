---
title: "EVENTS - parameters"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_shortref.htm) Syntax ... VALUE(p1) typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm) OPTIONALDEFAULT def1 VALUE(p2) typing(https://help.sap.com/doc/abap
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_parameters.htm"
abapFile: "abapevents_parameters.htm"
keywords: ["do", "if", "try", "method", "class", "abapevents", "parameters"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) →  [Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevents.htm) → 

EVENTS - parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_shortref.htm)

Syntax

... VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Effect

The syntax of the additions VALUE, OPTIONAL, and DEFAULT and the typing using [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm) corresponds to the [definition of formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_parameters.htm) in the interface of methods.

When an event is raised using RAISE EVENT, suitable actual parameters must be specified for all non-optional output parameters; these actual parameters are optional for all optional output parameters. Optional parameters for which no actual parameter has been specified are set to their type-dependent [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry") or to the replacement parameter def1 def2 ...

Example

Declaration of an instant event with an output parameter in class CL\_DEMO\_OUTPUT\_STREAM.

CLASS cl\_demo\_output\_stream
  ...
  PUBLIC SECTION.
    ...
    EVENTS completed
      EXPORTING
        VALUE(ev\_output) TYPE xstring .
    ...
ENDCLASS.