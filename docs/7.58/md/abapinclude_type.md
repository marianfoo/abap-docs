  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, BEGIN OF struct\_type](javascript:call_link\('abaptypes_struc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INCLUDE%2C%20TYPE%2C%20STRUCTURE%2C%20ABAPINCLUDE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INCLUDE, TYPE, STRUCTURE

[Short Reference](javascript:call_link\('abapinclude_type_shortref.htm'\))

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Additions:

[1\. ... AS name](#!ABAP_ADDITION_1@1@)
[2\. ... RENAMING WITH SUFFIX suffix](#!ABAP_ADDITION_2@2@)

Effect

This statement can only be executed within a structure definition with the additions BEGIN OF and END OF of the statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)), and [STATICS](javascript:call_link\('abapstatics.htm'\)). It includes all components of a structured type at this position in the current structure definition. The structured type can be specified as follows:

-   As a structured data type struc\_type after TYPE, both visible and usable at this position. struc\_type can be a local structured type, a visible structured type of a global class or global interface, or a structure from ABAP Dictionary.
-   As a structured data object struc after STRUCTURE, visible at this position. Its structured data type is used. struc must be a structure of the same program or a visible attribute of a global class or global interface.

The INCLUDE statement does not create a [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), which means the components are inserted as if they were listed individually instead of the statement INCLUDE.

Hints

-   The statement INCLUDE described here should no longer be used for the following reasons:
    
    -   If the statement INCLUDE is used to add more structure components to existing components, or if multiple INCLUDE statements are used in a structure, this can produce syntax errors due to naming conflicts. This is particularly problematic if structures are included that are not defined in the same program and that are subsequently changed.
    -   The included structures cannot be addressed as such without restrictions.
    -   The necessary metadata is stored again for each component of an included structure, whereas the metadata for the components of a [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") is only stored once when the substructure is defined.
    -   In contrast to real substructures, structures included using INCLUDE cannot be declared as [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") when embedded.
    
    Where possible, real [substructures](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") should be created instead of the statement INCLUDE. However, the addition RENAMING WITH SUFFIX should be used to avoid naming conflicts. This recommendation also applies to [includes of structures](javascript:call_link\('abenddic_include_structure.htm'\)) in ABAP Dictionary, where the structures of database tables particularly cannot contain any real substructures.
    
-   As usual, the addition TYPE is used to specify a data type. Like the addition [LIKE](javascript:call_link\('abaptypes_referring.htm'\)), the addition STRUCTURE is used to specify a data object. Outside of ABAP objects, [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"), database tables, or [views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") of the ABAP Dictionary can also be specified for struc with the addition STRUCTURE.
-   In constant structures defined with [CONSTANTS](javascript:call_link\('abapconstants.htm'\)), no components can be included using INCLUDE because it is not possible to assign a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") to them.
-   In regard to their [alignments](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry"), structures included using INCLUDE behave like substructures, which means [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") can occur before the first or after the last component. These do not occur when the components are declared directly.
-   A structure that is included using INCLUDE is handled by the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR of [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") like a substructure. The returned component table only contains one line for an included structure. The component type is represented by an object from CL\_ABAP\_STRUCTDESCR, but the AS\_INCLUDE column contains the value X. The method GET\_INCLUDED\_VIEW\_TAB can be used to resolve components of included structures.
-   When a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") is inherited by one structure from another, its boxed component property is also inherited.

Addition 1   

... AS name

Effect

By specifying the name name after the addition AS, the components of the included structure struc\_type or struc become a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") also known as [named include](javascript:call_link\('abennamed_include_glosry.htm'\) "Glossary Entry"). Besides regular addressing using the name of the including structure, they either can be addressed together using the name name or as individual components using the structure component selector (name-). The name name must be unique within the structure into which the components are included. This means that there must not be any other component with this name and it must not be specified in a different INCLUDE statement after AS.

Hints

-   Included components for which a name is specified after AS, can be addressed in the same way as if they were components of a substructure name.
-   A name name specified with AS name is used only for an additional explicit addressing option and is ignored by an implicit addressing in statements such as [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) or [SELECT INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)). A component renamed using RENAMING WITH SUFFIX actually has this name and is therefore never ignored.

Addition 2   

... RENAMING WITH SUFFIX suffix

Effect

The addition RENAMING WITH SUFFIX is used to rename each individual component by appending the extension suffix, which prevents naming conflicts between components with the same name. suffix must be specified directly.

Hints

-   The use of the RENAMING WITH SUFFIX addition makes it possible to include an individual structure multiple times.
-   Renaming the components of included structures can prevent errors during an upgrade of these structures.

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