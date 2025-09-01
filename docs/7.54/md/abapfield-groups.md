  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_extracts_extended.htm) → 

FIELD-GROUPS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfield-groups_shortref.htm)

Obsolete Syntax

FIELD-GROUPS *{* header *|* field\_group *}*.

Effect

Declares a field group for the [extract dataset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. Each field group represents the name of a row structure of the extract dataset. As many field groups as required can be created in a program. The actual components of a field group are defined using the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm).

The name of a field group is either the predefined name header or any name field\_group. If a field group header is declared, it automatically becomes the initial part of all remaining field groups of the program and its components constitute the standard sort key of the extract dataset for the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_extract.htm).

The statement FIELD-GROUPS is possible in the global declaration part of an executable program, of a function group, of a module pool, or of a subroutine pool, as well as in the subroutines and function modules. Field groups that are declared in [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") are visible only there.

Notes

-   Since global data objects can only be defined as components of field groups using the statement INSERT, it is best to declare field groups only in the global declaration part of a program.
    
-   The FIELD-GROUPS statement is forbidden in class pools or interface pools and in the methods of local classes of other programs.
    

Example

See [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm).