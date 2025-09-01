  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELD-GROUPS%2C%20ABAPFIELD-GROUPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIELD-GROUPS

[Short Reference](javascript:call_link\('abapfield-groups_shortref.htm'\))

Obsolete Syntax

FIELD-GROUPS *{* header *|* field\_group *}*.

Effect

Declares a field group for the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") of the program. Each field group represents the name of a row structure of the extract dataset. Any number of field groups can be created in a program. The actual components of a field group are defined using the statement [INSERT](javascript:call_link\('abapinsert_fg.htm'\)).

The name of a field group is either the predefined name header or any name field\_group. If a field group header is declared, it automatically becomes the initial part of all remaining field groups of the program and its components form the standard sort key of the extract dataset for the statement [SORT](javascript:call_link\('abapsort_extract.htm'\)).

The statement FIELD-GROUPS is possible in the global declaration part of an executable program, a function pool, a module pool, or a subroutine pool, as well as in the subroutines and function modules. Field groups that are declared in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") are only visible there.

Hints

-   Since global data objects can only be defined as components of field groups using the statement INSERT, it is best to declare field groups only in the global declaration part of a program.
-   The FIELD-GROUPS statement is forbidden in class pools or interface pools and in the methods of local classes of other programs.

Example

See [INSERT](javascript:call_link\('abapinsert_fg.htm'\)).