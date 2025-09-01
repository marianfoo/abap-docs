# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Modularization / Function Modules

Included pages: 6


### abenfunction_modules_obsolete.htm

---
title: "Function Modules"
description: |
  The following language constructs should no longer be used when creating function modules: -   Table parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm) -   Obsolete typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfuncti
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm"
abapFile: "abenfunction_modules_obsolete.htm"
keywords: ["do", "abenfunction", "modules", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) → 

Function Modules

The following language constructs should no longer be used when creating function modules:

-   [Table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm)

-   [Obsolete typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)

-   [Global parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_parameters_obsolete.htm)

Continue
[FUNCTION - table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm)
[FUNCTION - LIKE, STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)
[Global Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_parameters_obsolete.htm)


### abaptables_parameters_obsolete.htm

---
title: "Obsolete Syntax"
description: |
  ... TABLES p1  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm) OPTIONAL p2  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm"
abapFile: "abaptables_parameters_obsolete.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abaptables", "parameters", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION - table\_parameters

Obsolete Syntax

... TABLES p1  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           p2  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           ...

Effect

Defines the [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... in the [function module interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) display in the source code of function modules. Table parameters are obsolete CHANGING parameters that are typed as [standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"). If an internal table without a header line or a [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to a formal parameter of this type, an empty local header line is generated in the function module. If an internal table with a header line is used as an actual parameter, both the table body and the header line are passed to the function module. Pass by value is not possible in formal parameters defined using TABLES.

Information about TYPE, STRUCTURE, and OPTIONAL is available in [Properties of the Interface Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_parameters.htm). The following special rules apply to table parameters:

-   Only [pass by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is allowed in TABLES parameters.
    
-   After TYPE, you can only specify one table type itab\_type from the ABAP Dictionary (including type groups) of table type standard table with a flat line type.
    
-   A type with TYPE REF TO is not permitted.
    

When TABLES parameters are accessed that are not bound to any type-compliant actual parameters, a special [exception situation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) can arise.

Notes

-   Formal parameters defined with TABLES can be replaced by formal parameters defined with CHANGING. A local work area can be created for the internal table in the function module by using the addition LIKE LINE OF itab of the statement DATA.
    
-   Exception: Provided that [basXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbasxml_glosry.htm "Glossary Entry") is not set as the [RFC log](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_protocol.htm), using TABLES parameters for [remote-enabled function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") for [RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_glosry.htm "Glossary Entry") can be significantly faster than passing by means of the CHANGING parameter.
    

Continue
[Exceptions when Accessing TABLES Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm)


### abentables_parameters_restrictions.htm

---
title: "Exceptions when Accessing TABLES Parameters"
description: |
  In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the row type of the internal table. This is checked statically by the syntax check. In the case of TABLES parameters typed using the obsolete addition STRUCTURE(https://help.sap.c
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm"
abapFile: "abentables_parameters_restrictions.htm"
keywords: ["do", "if", "case", "try", "data", "internal-table", "abentables", "parameters", "restrictions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm) →  [FUNCTION - table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm) → 

Exceptions when Accessing TABLES Parameters

In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the row type of the internal table. This is checked statically by the syntax check.

In the case of TABLES parameters typed using the obsolete addition [STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm), the compatibility of the work area with the type specified in STRUCTURE is checked. The [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") that always accompanies TABLES parameters also has this type.

If a TABLES parameter is typed using STRUCTURE it can also be bound to actual parameters whose row type is longer than the type of the TABLES parameter, so making them incompatible with a work area judged to be correct by the syntax check. This causes problems if the components of the TABLES parameter are accessed dynamically within the procedure, since the data type of the actual parameter is evaluated at runtime. Consequently, memory limits can be violated by statements accessing a work area that references the type specified using STRUCTURE. This is why the following accesses produce the runtime error ITAB\_STRUC\_ACCESS\_VIOLATION:

-   The following statements terminate when the component specified in name is used to access a memory area after wa.

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) ... [COMPARING*|*TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_transport_options.htm)

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) [FROM wa TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm)

-   [APPEND wa TO itab SORTED BY ... (name) ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm)

-   The following statements terminated when wa is shorter than the row type:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) ... [COMPARING ALL FIELDS.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_transport_options.htm)

-   [COLLECT wa INTO itab ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm)

This exception is particularly likely if the [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") is used as an implicit work area. An explicit work area with the type of the actual parameter should be used to avoid this runtime error.


### abaptables_parameters_obsolete.htm

---
title: "Obsolete Syntax"
description: |
  ... TABLES p1  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm) OPTIONAL p2  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm"
abapFile: "abaptables_parameters_obsolete.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abaptables", "parameters", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION - table\_parameters

Obsolete Syntax

... TABLES p1  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           p2  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           ...

Effect

Defines the [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... in the [function module interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) display in the source code of function modules. Table parameters are obsolete CHANGING parameters that are typed as [standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"). If an internal table without a header line or a [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to a formal parameter of this type, an empty local header line is generated in the function module. If an internal table with a header line is used as an actual parameter, both the table body and the header line are passed to the function module. Pass by value is not possible in formal parameters defined using TABLES.

Information about TYPE, STRUCTURE, and OPTIONAL is available in [Properties of the Interface Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_parameters.htm). The following special rules apply to table parameters:

-   Only [pass by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is allowed in TABLES parameters.
    
-   After TYPE, you can only specify one table type itab\_type from the ABAP Dictionary (including type groups) of table type standard table with a flat line type.
    
-   A type with TYPE REF TO is not permitted.
    

When TABLES parameters are accessed that are not bound to any type-compliant actual parameters, a special [exception situation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) can arise.

Notes

-   Formal parameters defined with TABLES can be replaced by formal parameters defined with CHANGING. A local work area can be created for the internal table in the function module by using the addition LIKE LINE OF itab of the statement DATA.
    
-   Exception: Provided that [basXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbasxml_glosry.htm "Glossary Entry") is not set as the [RFC log](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_protocol.htm), using TABLES parameters for [remote-enabled function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") for [RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_glosry.htm "Glossary Entry") can be significantly faster than passing by means of the CHANGING parameter.
    

Continue
[Exceptions when Accessing TABLES Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm)


### abapfunction_typing_obsolete.htm

---
title: "FUNCTION - LIKE, STRUCTURE"
description: |
  Obsolete Syntax ...  LIKE struc-comp  LIKE struc STRUCTURE struc ... Effect Types interface parameters in the display of the properties of the interface parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_parameters.htm) of a function module interface
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_typing_obsolete.htm"
abapFile: "abapfunction_typing_obsolete.htm"
keywords: ["do", "if", "case", "try", "data", "types", "field-symbol", "abapfunction", "typing", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION - LIKE, STRUCTURE

Obsolete Syntax

...  *{*LIKE struc-comp*}* *|* *{*LIKE struc STRUCTURE struc*}* ...

Effect

Types interface parameters in the display of the [properties of the interface parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_parameters.htm) of a function module interface in the source code of function modules, when the type is specified using LIKE in Function Builder. Specifying the type in this way now produces a warning in Function Builder.

-   A typing using LIKE is displayed if an elementary component of a flat structure (or database table or view) [struc-comp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") from ABAP Dictionary is specified after LIKE in Function Builder. The typing check is the same as when specifying components after TYPE, with the exception that the [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") are ignored for [packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpacked_number_glosry.htm "Glossary Entry"). No types from a type group can be specified.
    
-   A typing using STRUCTURE is displayed if a flat structure (or database table) struc from ABAP Dictionary is specified after LIKE in Function Builder. This structure is then forced on the formal parameter ([casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry")), and it is possible to access the individual components. In the case of a structured actual parameter, this parameter must be at least as long as the formal parameter:
    

-   In the case of a structured actual parameter, its [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match the fragment view of the corresponding initial part of struc.

-   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.

No types from a type group can be specified.

If a component of a global program structure in the function group of a function module has exactly the same identity (structure name struc and component comp) as the component of a structure in ABAP Dictionary specified after LIKE, LIKE refers to the component of the structure defined in the function group. This leads to a warning in the syntax check.

Notes

-   Only TYPE should be used instead of LIKE in Function Builder. This is always displayed as TYPE in the source code. Furthermore, TYPE always relates to types in ABAP Dictionary and never to local types of the function group.
    
-   Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) and the addition CASTING.


### abenglobal_parameters_obsolete.htm

---
title: "Global Parameters"
description: |
  The formal parameters of the interface(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in Function Builder. Then the field Global is selected in the properties of the fu
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_parameters_obsolete.htm"
abapFile: "abenglobal_parameters_obsolete.htm"
keywords: ["select", "do", "while", "if", "case", "data", "field-symbol", "abenglobal", "parameters", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_modules_obsolete.htm) → 

Global Parameters

The formal parameters of the [interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) of a function module can be made known globally by choosing Edit → Interface → Globalize Parameters in Function Builder. Then the field Global is selected in the properties of the function module. The formal parameters of a global interface have the following properties:

-   All parameters that are fully typed and are defined for being passed as a value are treated as if global data objects of the same name were declared in the Top Include. This means they are visible in the same function group and, when the function module is exited, they retain their value.

-   All the other parameters are handled as if data objects of the same name were declared in the top include (for [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm), two in each case − one for the table body, one for the header line). But they can only be used during execution of the function module. If a parameter of this type is accessed when the function module is not executed, the runtime error GETWA\_NOT\_ASSIGNED occurs, since these parameters are realized internally by field symbols. A data object is only assigned to these field symbols while the function module is being executed.

In the function group, no global data objects with the same name (such as a global parameter) may be created. If multiple function modules in a function group have global interfaces, similarly named parameters must have identical definitions.

Note

The use of global interface parameters is obsolete and, in new function modules, interfaces should generally not be globalized.
