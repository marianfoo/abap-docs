# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Declarations / Data Types and Data Objects

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentypes_data_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm)
- [abaptypes_implicit.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm)
- [abendeclaration_wrong_length.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm)
- [abenanonymous_components.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm)
- [abaptypes_client_specified.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.949Z

---

### abentypes_data_obsolete.htm

> **📖 Official SAP Documentation**: [abentypes_data_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Data Types and Data Objects

-   [TYPES - implicit](javascript:call_link\('abaptypes_implicit.htm'\))

-   [Wrong Lengths](javascript:call_link\('abendeclaration_wrong_length.htm'\))

-   [Anonymous Components](javascript:call_link\('abenanonymous_components.htm'\))

-   [TYPES - CLIENT SPECIFIED](javascript:call_link\('abaptypes_client_specified.htm'\))

Continue
[TYPES - implicit](javascript:call_link\('abaptypes_implicit.htm'\))
[Wrong Lengths](javascript:call_link\('abendeclaration_wrong_length.htm'\))
[Anonymous Components](javascript:call_link\('abenanonymous_components.htm'\))
[TYPES - CLIENT SPECIFIED](javascript:call_link\('abaptypes_client_specified.htm'\))



**📖 Source**: [abentypes_data_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm)

### abaptypes_implicit.htm

> **📖 Official SAP Documentation**: [abaptypes_implicit.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

TYPES - implicit

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Obsolete Syntax

TYPES *{* dtype *}*
    *|* *{* dtype(len) *}*
    *|* *{* dtype LENGTH len *}*
    *|* *{* dtype TYPE c*|*n*|*p*|*x *}*
    *|* *{* dtype(len) TYPE p*}*
    *|* *{* dtype TYPE p LENGTH len*}*
    *|* *{* dtype TYPE p DECIMALS dec*}*.

Effect

Obsolete short forms of the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) with reference to a built-in elementary type [abap\_type](javascript:call_link\('abaptypes_simple.htm'\)).

-   If TYPE abap\_type is not specified, the type is set implicitly to the standard type c.
    
-   If len or dec is not specified for the ABAP types c, n, p, and x, the length is set to the [type-friendly standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). No decimal places are set for p. This is only permitted outside of classes or interfaces.
    

Note

All additions should be specified in full, to make them easier to read.

Bad Example

TYPES: t1,
       t2 TYPE p.

Good Example

TYPES: t1 TYPE c LENGTH 1,
       t2 TYPE p LENGTH 8 DECIMALS 0.



**📖 Source**: [abaptypes_implicit.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_implicit.htm)

### abendeclaration_wrong_length.htm

> **📖 Official SAP Documentation**: [abendeclaration_wrong_length.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

Wrong Lengths

Obsolete Syntax

... dtype(len)*|*dobj(len) TYPE d*|*f*|*i*|*t ...

Effect

Lengths specified in [declarations](javascript:call_link\('abenabap_declarations.htm'\)) using the statements TYPES, DATA, STATICS, and CONSTANTS and the built-in ABAP types d, f, i, and t are ignored. Only the predefined [fixed lengths](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) can be specified. Lengths specified in this way produce syntax errors in classes and interfaces and syntax warnings elsewhere.

Note

This obsolete length specification is only possible with the obsolete parenthesis syntax and not with the recommended addition LENGTH.

Bad Example

DATA: f1(8) TYPE d,
      f2(4) TYPE i.

Good Example

DATA: f1 TYPE d,
      f2 TYPE i.



**📖 Source**: [abendeclaration_wrong_length.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_wrong_length.htm)

### abenanonymous_components.htm

> **📖 Official SAP Documentation**: [abenanonymous_components.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

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

If [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or the constant [space](javascript:call_link\('abenspace.htm'\)) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](javascript:call_link\('abapdata_struc.htm'\)) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components correspond to the content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and by specifying appropriate offsets/lengths.

Notes

-   Anonymous components must not be specified in classes or interfaces.

-   These anonymous components can be replaced easily by named components. Named components increase the function of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.



**📖 Source**: [abenanonymous_components.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_components.htm)

### abaptypes_client_specified.htm

> **📖 Official SAP Documentation**: [abaptypes_client_specified.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abaptypes_client_specified.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_client_specified.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

TYPES - CLIENT SPECIFIED

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Obsolete Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity and that also has an initial component clnt with the type of a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry").

cds\_entity expects the name of a non-abstract [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), namely:

-   The name of a [CDS](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") view as defined in the CDS DDL statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)).
    
-   The name of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as defined in the CDS DDL statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)).
    
-   The name of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") as defined in the CDS DDL statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)).
    

Any name for the client column that complies with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) can be specified for clnt.

Notes

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement for CDS entities in which [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is disabled using the obsolete statement [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\))s. [USING](javascript:call_link\('abapselect_client.htm'\)) is used to switch implicit client handling and not disable it, which means the addition CLIENT SPECIFIED is also obsolete for TYPES.
    
-   If the statement is used for a [client-specific CDS table function](javascript:call_link\('abencds_func_client_handling.htm'\)), a structured type is produced that matches the row structure of the return value of the associated [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)). This type is not, however, required in ABAP programs, since the AMDP function implementation cannot be called like a regular function method
    
-   The name specified for clnt has absolutely no dependency on the actual name of a client column in a data source of a CDS view.
    
-   Abstract [CDS](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") entities cannot be specified.
    

Example

Defines a row type scarr\_spfli\_clnt for an internal table used as a target area when a client-specific CDS view is accessed using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

The following example shows how the recommended addition [USING ALL CLIENTS](javascript:call_link\('abapselect_client.htm'\)) is used, for which no special target area is required.

DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS
       INTO TABLE @scarr\_spfli.
