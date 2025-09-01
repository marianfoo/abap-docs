---
title: "INCLUDE - TYPE, STRUCTURE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type_shortref.htm) Syntax INCLUDE  TYPE struc_type  STRUCTURE struc  AS name RENAMING WITH SUFFIX suffix. Extras: 1. ... AS name(#!ABAP_ADDITION_1@1@) 2. ... RENAMING W
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm"
abapFile: "abapinclude_type.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "types", "abapinclude", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) →  [TYPES - BEGIN OF struct\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_struc.htm) → 

INCLUDE - TYPE, STRUCTURE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type_shortref.htm)

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Extras:

[1\. ... AS name](#!ABAP_ADDITION_1@1@)
[2\. ... RENAMING WITH SUFFIX suffix](#!ABAP_ADDITION_2@2@)

Effect

This statement can only be declared within a structure definition with the additions BEGIN OF and END OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm), [CLASS-DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-data.htm), and [STATICS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstatics.htm). It applies all the components of a structured type at the specified location to the current structure definition. The structured type can be specified as follows:

-   As a structured data type struc\_type after TYPE, both visible and usable in this place. struc\_type can be a local structured type, a visible structured type of a global class or global interface, or a structure from ABAP Dictionary.
    
-   As a structured data object struc after STRUCTURE, visible in this place. Its structured data type is used. struc must be a structure of the same program or a visible attribute of a global class or global interface.
    

The INCLUDE statement does not create a [substructure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstructure_glosry.htm "Glossary Entry"), which means the components are inserted as if they are included individually in place of the statement INCLUDE.

Notes

-   The statement INCLUDE described here should no longer be used for the following reasons:
    

-   If further structure components are to be added to existing components using the statement INCLUDE or if multiple INCLUDE statements are used in a structure, this can produce syntax errors due to naming conflicts. This is particularly problematic if structures that are not defined in the same program are included and these are to be changed at a later date.

-   The included structures cannot be addressed as such without restrictions.

-   The necessary metadata is stored again for each component of an included structure, whereas the metadata for the components of a [substructure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstructure_glosry.htm "Glossary Entry") is only stored once when the substructure is defined.

-   In contrast to real substructures, structures included using INCLUDE cannot be declared as [static boxes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_box_glosry.htm "Glossary Entry") when embedded.

Where possible, real [substructures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstructure_glosry.htm "Glossary Entry") should be created rather than using the statement INCLUDE. The addition RENAMING WITH SUFFIX, however, should be used to prevent naming conflicts. This recommendation also applies to [includes of structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm) in ABAP Dictionary, where the structures of database tables in particular cannot contain any real substructures.

-   As usual, the addition TYPE is used to specify a data type. Like the addition [LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_referring.htm), the addition STRUCTURE is used to specify a data object. Outside of ABAP objects, [flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry"), database tables, or [views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenview_glosry.htm "Glossary Entry") in ABAP Dictionary can also be specified for struc with the addition STRUCTURE.
    
-   In constant structures defined with [CONSTANTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconstants.htm), no components can be included using INCLUDE because these cannot be assigned a [start value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_value_glosry.htm "Glossary Entry").
    
-   With respect to their [alignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalignment_glosry.htm "Glossary Entry"), structures included using INCLUDE behave like substructures, which means [alignment gaps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalignment_gap_glosry.htm "Glossary Entry") can occur before the first or after the last component. These do not occur when the components are declared directly.
    
-   A structure that is included using INCLUDE is handled by the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR of [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") in the same way as a substructure. The returned component table only contains one row for an included structure. The component type is represented by an object from CL\_ABAP\_STRUCTDESCR, but the AS\_INCLUDE column contains the value "X". The method GET\_INCLUDED\_VIEW\_TAB can be used to resolve the components of included structures.
    
-   When a [static box](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_box_glosry.htm "Glossary Entry") is applied from one structure to another, its boxed component attribute is also applied.
    

Addition 1

... AS name

Effect

By specifying the name name after the addition AS, either all components of the included structure struc\_type or struc can be addressed together using the name name, or individual components can be addressed using the structure component selector (\-). The name name must be unique within the structure in which the components are included. This means that there can be no other component with this name and it cannot be specified in a different INCLUDE statement after AS.

Notes

-   Included components for which a name is specified after AS can be addressed in the same way as if they were components of a substructure name.
    
-   A name name specified with AS name is used only as an addressing option and is ignored in statements such as [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm) or [SELECT INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm). A component renamed using RENAMING WITH SUFFIX actually has this name and is therefore not ignored.
    

Addition 2

... RENAMING WITH SUFFIX suffix

Effect

The addition RENAMING WITH SUFFIX is used to rename each individual component by adding the extension suffix, which prevents naming conflicts between components of the same name. suffix must be specified directly.

Note

Using the RENAMING WITH SUFFIX addition makes it possible to embed an individual structure multiple times.

Example

In this example, the structure week is defined by repeatedly using the components of the structured type t\_day. The components of week are all at the same level and can be addressed as follows: week-work\_mon, week-free\_mon, week-work\_tue, and so on. Alternatively, they can also be addressed as follows: week-monday-work, week-monday-free, week-tuesday-work, and so on.

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

This translation does not reflect the current version of the documentation.