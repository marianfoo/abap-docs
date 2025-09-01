  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_extracts_extended.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%2C%20field_group%2C%20ABAPINSERT_FG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT, field\_group

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_field-group_shortref.htm)

Obsolete Syntax

INSERT dobj1 dobj2 ... INTO *{* header *|* field\_group *}*.

Effect

This statement is used to build a structure of a field group of the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program, where the field group is defined using [FIELD-GROUPS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-groups.htm). A list of global [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") data objects dobj can be specified after INSERT. Specifying local data objects raises an exception. The list defines the components of the field group header or field\_group. Any name can be specified directly for field\_group, whereas header is a predefined name of a special field group whose components are automatically a part and a key of all other field groups. The components of a field group are pointers to data objects whose content is appended to the extract dataset as a line when executing the statement [EXTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapextract.htm).

The statement INSERT can be used in any [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of a program and is executed at the appropriate time during the program execution. A field group can have different INSERT statements. Additional components can be added to a field group until the first corresponding line with EXTRACT is appended to the extract dataset. More specifically, components can only be added to the field group header until a field group of the program is extracted because it is a part of all field groups. An INSERT statement for an already extracted field group raises an uncatchable exception.

Field symbols can be specified for dobj, but not dereferenced data references. A field symbol is ignored if no data object is assigned to it. Specifying a data reference raises an uncatchable exception.

Hints

-   A field group field\_group to which no fields are explicitly added still contains the field of the special field group header.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement INSERT is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) should be used instead.

Example

In this example, three field groups are declared in the global declaration part of an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") and its components are specified in the event block START-OF-SELECTION. The field group flight\_info contains five components: those of the field group header and its own. The field group flight\_date contains only the components of the field group header.

REPORT ...
DATA: spfli\_wa   TYPE spfli,
      sflight\_wa TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
START-OF-SELECTION.
  INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
            INTO header,
          spfli\_wa-cityfrom spfli\_wa-cityto
            INTO flight\_info.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Local data objects are to be inserted into a field group.
    Runtime error: EXTRACT\_INSERT\_LOCAL\_DATA
-   Cause: Field group contains INSERT after sets of this set type have already been extracted using EXTRACT.
    Runtime error: INSERT\_INTO\_LOCKED\_FIELD\_GROUP