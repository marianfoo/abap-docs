---
title: "FUNCTION, LIKE, STRUCTURE"
description: |
  Obsolete Syntax ...  LIKE struc-comp  LIKE struc STRUCTURE struc ... Effect Typing of interface parameters in the display of the properties of the interface parameters(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_parameters.htm) of a function module interf
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfunction_typing_obsolete.htm"
abapFile: "abapfunction_typing_obsolete.htm"
keywords: ["do", "if", "case", "try", "data", "types", "field-symbol", "abapfunction", "typing", "obsolete"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION, LIKE, STRUCTURE

Obsolete Syntax

...  *{*LIKE struc-comp*}* *|* *{*LIKE struc STRUCTURE struc*}* ...

Effect

Typing of interface parameters in the display of the [properties of the interface parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_parameters.htm) of a function module interface in the source code of function modules, when the type is specified using LIKE in Function Builder. Specifying the type in this way now produces a warning in Function Builder.

-   A typing using LIKE is displayed if an elementary component struc-comp of a [flat DDIC structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) (or DDIC database table or DDIC view) is specified after LIKE in Function Builder. The typing check is the same as when specifying components after TYPE, with the exception that the [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") are ignored for [packed numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpacked_number_glosry.htm "Glossary Entry"). No types from a type pool can be specified.

-   A typing using STRUCTURE is displayed if a flat DDIC structure (or DDIC database table or DDIC view) struc is specified after LIKE in Function Builder. This structure is then forced on the formal parameter ([casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencast_casting_glosry.htm "Glossary Entry")), and it is possible to access the individual components. In the case of a structured actual parameter, this parameter must be at least as long as the formal parameter:

-   In the case of a structured actual parameter, its [fragment view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match the fragment view of the corresponding initial part of struc.

-   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.

No types from a type pool can be specified.

If a component of a global program structure in the function pool of a function module has exactly the same identity (structure name struc and component comp) as the component of a DDIC structure specified after LIKE, LIKE refers to the component of the structure defined in the function pool. This leads to a warning in the syntax check.

Hints

-   Only TYPE should be used instead of LIKE in Function Builder. This is always displayed as TYPE in the source code. Furthermore, TYPE always relates to types in ABAP Dictionary and never to local types of the function pool.

-   Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign.htm) and the addition CASTING.