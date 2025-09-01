  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

INSERT - field\_group

[Quick Reference](javascript:call_link\('abapinsert_field-group_shortref.htm'\))

Obsolete Syntax

INSERT dobj1 dobj2 ... INTO *{* header *|* field\_group *}*.

Effect

This statement is used to build a structure of a field group of the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") of the program, where the field group is defined using [FIELD-GROUPS](javascript:call_link\('abapfield-groups.htm'\)) . A list of global [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data objects dobj can be inserted after INSERT. Specifying local data objects raises an exception. The list defines the components of the field group header or field\_group. Any name can be specified directly for field\_group, whereas header is a predefined name of a special field group whose components are automatically a part and a key of all other field groups. The components of a field group have the function of a pointer to data objects whose contents can be attached as a line to the extract dataset when executing the statement [EXTRACT](javascript:call_link\('abapextract.htm'\)).

The statement INSERT can be used in any [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of a program and is executed at the given time during the program execution. A field group can have different INSERT statements. Additional components can be added to a field group until the first corresponding line with EXTRACT is attached to the extract dataset. More specifically, components can only be added to the field group header until a field group of the program is extracted because it is a part of all field groups. An INSERT statement for an already extracted field group raises a non-handleable exception.

Field symbols can be specified for dobj but not dereferenced data references. A field symbol is ignored if no data object is assigned to it. Specifying a data reference raises a non-handleable exception.

Notes

-   A field group field\_group to which no fields are explicitly added still contains the field of the special field group header.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement INSERT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) are recommended instead.
    

Example

In this example, three field groups are declared in the global declaration part of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") and its components are specified in the event block START-OF-SELECTION. The field group flight\_info contains five components of the field group header and its own. The field group flight\_date contains only the components of the field group header.

REPORT ...
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
START-OF-SELECTION.
  INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
            INTO header,
          spfli\_wa-cityfrom spfli\_wa-cityto
            INTO flight\_info.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Inserts local data objects into a field group.
    Runtime error: EXTRACT\_INSERT\_LOCAL\_DATA
    
-   Cause: Field group contains INSERT after sets of this set type have been extracted using EXTRACT.
    Runtime error: INSERT\_INTO\_LOCKED\_FIELD\_GROUP