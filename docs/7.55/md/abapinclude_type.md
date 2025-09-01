---
title: "INCLUDE, TYPE, STRUCTURE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_type_shortref.htm) Syntax INCLUDE  TYPE struc_type  STRUCTURE struc  AS name RENAMING WITH SUFFIX suffix. Additions: 1. ... AS name(#!ABAP_ADDITION_1@1@) 2. ... RENAMIN
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_type.htm"
abapFile: "abapinclude_type.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "types", "abapinclude", "type"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) →  [TYPES, BEGIN OF struct\_type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_struc.htm) → 

INCLUDE, TYPE, STRUCTURE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_type_shortref.htm)

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Additions:

[1\. ... AS name](#!ABAP_ADDITION_1@1@)
[2\. ... RENAMING WITH SUFFIX suffix](#!ABAP_ADDITION_2@2@)

Effect

This statement can only be executed within a structure definition with the additions BEGIN OF and END OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm), [CLASS-DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-data.htm), and [STATICS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstatics.htm). It passes all the components of a structured type from the specified position to the current structure definition. The structured type can be specified as follows:

-   As a structured data type struc\_type after TYPE, both visible and usable at this position. struc\_type can be a local structured type, a visible structured type of a global class or global interface, or a structure from ABAP Dictionary.

-   As a structured data object struc after STRUCTURE, visible at this position. Its structured data type is used. struc must be a structure of the same program or a visible attribute of a global class or global interface.

The INCLUDE statement does not create a [substructure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstructure_glosry.htm "Glossary Entry"), which means the components are inserted as if they were listed individually instead of the statement INCLUDE.

Hints

-   The statement INCLUDE described here should no longer be used for the following reasons:

-   If the statement INCLUDE is used to add more structure components to existing components, or if multiple INCLUDE statements are used in a structure, this can produce syntax errors due to naming conflicts. This is particularly problematic if structures are included that are not defined in the same program and that are subsequently changed.

-   The included structures cannot be addressed as such without restrictions.

-   The necessary metadata is stored again for each component of an included structure, whereas the metadata for the components of a [substructure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstructure_glosry.htm "Glossary Entry") is only stored once when the substructure is defined.

-   In contrast to real substructures, structures included using INCLUDE cannot be declared as [static boxes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_box_glosry.htm "Glossary Entry") when embedded.

Where possible, real [substructures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstructure_glosry.htm "Glossary Entry") should be created instead of the statement INCLUDE. However, the addition RENAMING WITH SUFFIX should be used to avoid naming conflicts. This recommendation also applies to [includes of structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_include_structure.htm) in ABAP Dictionary, where the structures of database tables particularly cannot contain any real substructures.

-   As usual, the addition TYPE is used to specify a data type. Like the addition [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_referring.htm), the addition STRUCTURE is used to specify a data object. Outside of ABAP objects, [flat structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_structure_glosry.htm "Glossary Entry"), database tables, or [views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenview_glosry.htm "Glossary Entry") of the ABAP Dictionary can also be specified for struc with the addition STRUCTURE.

-   In constant structures defined with [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm), no components can be included using INCLUDE because it is not possible to assign a [start value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstart_value_glosry.htm "Glossary Entry") to them.

-   In regard to their [alignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_glosry.htm "Glossary Entry"), structures included using INCLUDE behave like substructures, which means [alignment gaps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_gap_glosry.htm "Glossary Entry") can occur before the first or after the last component. These do not occur when the components are declared directly.

-   A structure that is included using INCLUDE is handled by the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR of [RTTI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") like a substructure. The returned component table only contains one line for an included structure. The component type is represented by an object from CL\_ABAP\_STRUCTDESCR, but the AS\_INCLUDE column contains the value "X". The method GET\_INCLUDED\_VIEW\_TAB can be used to resolve components of included structures.

-   When a [static box](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_box_glosry.htm "Glossary Entry") is inherited by one structure from another, its boxed component property is also inherited.
    

Addition 1

... AS name

Effect

By specifying the name name after the addition AS, either all components of the included structure struc\_type or struc can be addressed together using the name name or individual components using the structure component selector (\-). The name name must be unique within the structure into which the components are included. This means that there must not be any other component with this name and it must not be specified in a different INCLUDE statement after AS.

Hints

-   Included components for which a name is specified after AS, can be addressed in the same way as if they were components of a substructure name.

-   A name name specified with AS name is used only for an additional explicit addressing option and is ignored by an implicit addressing in statements such as [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding.htm) or [SELECT INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm). A component renamed using RENAMING WITH SUFFIX actually has this name and is therefore never ignored.
    

Addition 2

... RENAMING WITH SUFFIX suffix

Effect

The addition RENAMING WITH SUFFIX is used to rename each individual component by appending the extension suffix, which prevents naming conflicts between components with the same name. suffix must be specified directly.

Hint

The use of the RENAMING WITH SUFFIX addition makes it possible to embed an individual structure multiple times.

Example

In this example, the structure week is defined by repeated transfer of the components of the structured type t\_day. The components of week are all at the same level and can be addressed as follows: week-work\_mon, week-free\_mon, week-work\_tue, and so on. Alternatively, they can also be addressed as follows: week-monday-work, week-monday-free, week-tuesday-work, and so on.

TYPES: BEGIN OF t\_day,
         work TYPE c LENGTH 8,
         free TYPE c LENGTH 16,
       END OF t\_day.
DATA BEGIN OF week.
  INCLUDE TYPE t\_day AS monday    RENAMING WITH SUFFIX \_mon.
  INCLUDE TYPE t\_day AS tuesday   RENAMING WITH SUFFIX \_tue.
  INCLUDE TYPE t\_day AS wednesday RENAMING WITH SUFFIX \_wed.
  ...
DATA END OF week.