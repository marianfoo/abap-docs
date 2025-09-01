---
title: "EVENTS, parameters"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_shortref.htm) Syntax ... VALUE(p1) typing(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) OPTIONALDEFAULT def1 VALUE(p2) typing(https://help.sap.com/doc/abap
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_parameters.htm"
abapFile: "abapevents_parameters.htm"
keywords: ["do", "if", "try", "method", "class", "abapevents", "parameters"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EVENTS%2C%20parameters%2C%20ABAPEVENTS_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EVENTS, parameters

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_shortref.htm)

Syntax

... VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Effect

The syntax of the additions VALUE, OPTIONAL, and DEFAULT and the typing using [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) corresponds to the [definition of formal parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_parameters.htm) in the interface of methods.

When an event is raised using RAISE EVENT, suitable actual parameters must be specified for all non-optional output parameters; these actual parameters are optional for all optional output parameters. Optional parameters for which no actual parameter has been specified are set to their type-dependent [initial value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry") or to the replacement parameter def1 def2 ...

Example

Declaration of an instance event with an output parameter in the class CL\_DEMO\_OUTPUT\_STREAM.

CLASS cl\_demo\_output\_stream DEFINITION.
  ...
  PUBLIC SECTION.
    ...
    EVENTS completed
      EXPORTING
        VALUE(ev\_output) TYPE xstring.
    ...
ENDCLASS.