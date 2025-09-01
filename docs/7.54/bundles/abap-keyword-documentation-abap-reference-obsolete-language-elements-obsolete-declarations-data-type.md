# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Declarations / Data Types and Data Objects

Included pages: 5


### abentypes_data_obsolete.htm

---
title: "Data Types and Data Objects"
description: |
  -   TYPES - implicit(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm) -   Wrong Lengths(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm) -   Anonymous Components(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/e
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm"
abapFile: "abentypes_data_obsolete.htm"
keywords: ["do", "if", "data", "types", "abentypes", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) → 

Data Types and Data Objects

-   [TYPES - implicit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm)

-   [Wrong Lengths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm)

-   [Anonymous Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm)

-   [TYPES - CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm)

Continue
[TYPES - implicit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm)
[Wrong Lengths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm)
[Anonymous Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm)
[TYPES - CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm)


### abaptypes_implicit.htm

---
title: "TYPES - implicit"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm) Obsolete Syntax TYPES  dtype    dtype(len)    dtype LENGTH len    dtype TYPE cnpx    dtype(len) TYPE p   dtype TYPE p LENGTH len   dt
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm"
abapFile: "abaptypes_implicit.htm"
keywords: ["do", "if", "class", "data", "types", "abaptypes", "implicit"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm) → 

TYPES - implicit

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm)

Obsolete Syntax

TYPES *{* dtype *}*
    *|* *{* dtype(len) *}*
    *|* *{* dtype LENGTH len *}*
    *|* *{* dtype TYPE c*|*n*|*p*|*x *}*
    *|* *{* dtype(len) TYPE p*}*
    *|* *{* dtype TYPE p LENGTH len*}*
    *|* *{* dtype TYPE p DECIMALS dec*}*.

Effect

Obsolete short forms of the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) with reference to a built-in elementary type [abap\_type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_simple.htm).

-   If TYPE abap\_type is not specified, the type is set implicitly to the standard type c.
    
-   If len or dec is not specified for the ABAP types c, n, p, and x, the length is set to the [type-friendly standard length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm). No decimal places are set for p. This is only permitted outside of classes or interfaces.
    

Note

All additions should be specified in full, to make them easier to read.

Bad Example

TYPES: t1,
       t2 TYPE p.

Good Example

TYPES: t1 TYPE c LENGTH 1,
       t2 TYPE p LENGTH 8 DECIMALS 0.


### abendeclaration_wrong_length.htm

---
title: "Wrong Lengths"
description: |
  Obsolete Syntax ... dtype(len)dobj(len) TYPE dfit ... Effect Lengths specified in declarations(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) using the statements TYPES, DATA, STATICS, and CONSTANTS and the built-in ABAP types d, f, i, and t are i
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm"
abapFile: "abendeclaration_wrong_length.htm"
keywords: ["do", "if", "class", "data", "types", "abendeclaration", "wrong", "length"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm) → 

Wrong Lengths

Obsolete Syntax

... dtype(len)*|*dobj(len) TYPE d*|*f*|*i*|*t ...

Effect

Lengths specified in [declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) using the statements TYPES, DATA, STATICS, and CONSTANTS and the built-in ABAP types d, f, i, and t are ignored. Only the predefined [fixed lengths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) can be specified. Lengths specified in this way produce syntax errors in classes and interfaces and syntax warnings elsewhere.

Note

This obsolete length specification is only possible with the obsolete parenthesis syntax and not with the recommended addition LENGTH.

Bad Example

DATA: f1(8) TYPE d,
      f2(4) TYPE i.

Good Example

DATA: f1 TYPE d,
      f2 TYPE i.


### abenanonymous_components.htm

---
title: "Anonymous Components"
description: |
  Obsolete Syntax DATA: BEGIN OF struc, ... '...', ... space(len) TYPE c, ... END OF struc. Effect If text field literals(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_field_literal_glosry.htm 'Glossary Entry') or the constant space(https://help.sap.com/doc/abapdocu_7
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm"
abapFile: "abenanonymous_components.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenanonymous", "components"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm) → 

Anonymous Components

Obsolete Syntax

DATA: BEGIN OF struc,
        ...
        '...',
        ...
        space(len) *\[*TYPE c*\]*,
        ...
      END OF struc.

Effect

If [text field literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or the constant [space](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspace.htm) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_struc.htm) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components correspond to the content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and by specifying appropriate offsets/lengths.

Notes

-   Anonymous components must not be specified in classes or interfaces.

-   These anonymous components can be replaced easily by named components. Named components increase the function of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.


### abaptypes_client_specified.htm

---
title: "TYPES - CLIENT SPECIFIED"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm) Obsolete Syntax TYPES dtype TYPE cds_entity CLIENT SPECIFIED clnt. Effect The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a CDS
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm"
abapFile: "abaptypes_client_specified.htm"
keywords: ["select", "do", "if", "try", "method", "data", "types", "internal-table", "abaptypes", "client", "specified"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm) → 

TYPES - CLIENT SPECIFIED

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm)

Obsolete Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity and that also has an initial component clnt with the type of a [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry").

cds\_entity expects the name of a non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"), namely:

-   The name of a [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") view as defined in the CDS DDL statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm).
    
-   The name of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry") as defined in the CDS DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm).
    
-   The name of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") as defined in the CDS DDL statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm).
    

Any name for the client column that complies with the [naming conventions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm) can be specified for clnt.

Notes

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement for CDS entities in which [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is disabled using the obsolete statement [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm)s. [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) is used to switch implicit client handling and not disable it, which means the addition CLIENT SPECIFIED is also obsolete for TYPES.
    
-   If the statement is used for a [client-specific CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm), a structured type is produced that matches the row structure of the return value of the associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_methods.htm). This type is not, however, required in ABAP programs, since the AMDP function implementation cannot be called like a regular function method
    
-   The name specified for clnt has absolutely no dependency on the actual name of a client column in a data source of a CDS view.
    
-   Abstract [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry") entities cannot be specified.
    

Example

Defines a row type scarr\_spfli\_clnt for an internal table used as a target area when a client-specific CDS view is accessed using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

The following example shows how the recommended addition [USING ALL CLIENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) is used, for which no special target area is required.

DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS
       INTO TABLE @scarr\_spfli.
