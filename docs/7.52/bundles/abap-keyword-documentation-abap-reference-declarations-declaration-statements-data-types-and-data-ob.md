# ABAP - Keyword Documentation / ABAP - Reference / Declarations / Declaration Statements / Data Types and Data Objects / Special Declarations

Included pages: 2


### abendeclarations_spcl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) → 

Special Declarations

These language elements should be used only by specialists with in-depth knowledge of the corresponding environment.

-   [INFOTYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinfotypes.htm)

Continue
[INFOTYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinfotypes.htm)


### abapinfotypes.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Special Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations_spcl.htm) → 

INFOTYPES

This statement should be used by specialists only.
In-depth knowledge of the corresponding environment is essential.
This environment is not part of ABAP and is not documented here.

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinfotypes_shortref.htm)

Syntax

INFOTYPES nnnn *\[*NAME name*\]*
               *\[*OCCURS n*\]*
               *\[*MODE N*|*P*\]*
               *\[*AS PERSON TABLE*\]*
               *\[*VALID FROM intlim1 TO intlim2*\]*.

Extras:

[1\. ... NAME name](#!ABAP_ADDITION_1@1@)
[2\. ... OCCURS n](#!ABAP_ADDITION_2@2@)
[3\. ... MODE N*|*P](#!ABAP_ADDITION_3@3@)
[4\. ... AS PERSON TABLE](#!ABAP_ADDITION_4@4@)
[5\. ... VALID FROM intlim1 TO intlim2](#!ABAP_ADDITION_5@5@)

Effect

Declares an internal table for HR [info types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninfo_type_glosry.htm "Glossary Entry"), forbidden in classes. If the addition NAME is not specified, an internal table pnnnn or ppnnnn is created with the structure of the info type Pnnnn and a [header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). The name ppnnnn is used when the addition AS PERSON TABLE is specified, otherwise it is pnnnn.

If the addition MODE N is not specified, the statement INFOTYPES modifies the behavior of the special [logical databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") PAP, PCH, PNP, and PNPCE of the human resources component HR by default and is the prerequisite for it working correctly.

A four-digit numeric key of an info type of SAP ERP component human resources (HR) must be specified for nnnn . Each info type is represented in the HR component by a special structure called Pnnnn in ABAP Dictionary. Each info type contains the character-like components BEGDA and ENDDA.

Notes

-   The internal table created by the statement INFOTYPES can also be declared using the following (obsolete) statement sequence but is then ignored by the special logical databases.
    

[DATA BEGIN OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) *{*pnnnn*|*ppnnnn*|*name*}* [OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) *{* 10 *|* n *}*.
  [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm) pnnnn.
DATA END OF *{*pnnnn*|*ppnnnn*|*name*}*
     [VALID BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) *{*begda*|*intlim1*}* AND *{*endda*|*intlim2*}*.

-   No internal tables with header lines can be declared in classes. For this reason, the statement INFOTYPES is forbidden here.
    
-   In executable programs that are associated with the special logical databases PAP, PCH, PNP, and PNPCE of the human resources component, the statement INFOTYPES is still required and should only be used here.
    
-   PNPCE is by far the most important of the logical databases PAP, PCH, PNP, and PNPCE. The logical data type PAP is hardly used anymore.
    
-   Info types make it possible for an HR application to handle employee-related data effectively. The special statement [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm) is used for this.
    
-   To ensure that the statement works with the logical databases correctly, it must be executed in the [global declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") and before the first operational statements of an executable program.
    
-   The properties of the special logical databases determined by the statement INFOTYPES allow themselves to be changed using defined macros while the program is executed. For the logical database PNPCE, these are the macros PNP\_SET\_INFTY\_MODE\_BY\_NAME and PNP\_SET\_INFTY\_MODE\_BY\_NUMBER for changing the mode and RP\_SET\_DATA\_INTERVAL, RP\_SET\_DATA\_INTERVAL\_INFTY, and RP\_SET\_DATA\_INTERVAL\_ALL for setting the validity period.
    

Addition 1

... NAME name

Effect

Using the addition NAME, a name of up to 20 characters can be specified that is then used for the table instead of pnnnn or ppnnnn.

Addition 2

... OCCURS n

Effect

If the addition OCCURS is not specified, the default memory requirements of the internal table are set to ten rows (see the addition INITIAL SIZE of the statement [TYPES - TABLE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm)). The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Addition 3

... MODE N*|*P

Addition 4

... AS PERSON TABLE

Effect

These additions modify the behavior of the special logical databases PAP, PCH, PNP, and PNPCE of the human resources component. AS PERSON TABLE and MODE P, on the other hand, only modify the logical database PNPCE.

If the addition MODE N is not specified, the properties of the internal table are stored in an internal system table accessed in this logical database. If the statement INFOTYPES is executed without the addition MODE N in an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is associated with one of these logical databases, the behavior is as follows:

-   The logical database PAP fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) applicant.
    
-   The logical database PCH fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) object.
    
-   The logical database PNP fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) pernr.
    
-   The behavior of the logical database PNPCE can also be controlled using the additions AS PERSON TABLE and MODE P:
    

-   If one of these additions is not specified, the table is filled with the event [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) pernr. Only those data records are provided that fall in the specified evaluation period on the selection screen (this is a difference to the logical database PNP, which provides all data records by default). Alternatively, the macros RP\_SET\_DATA\_INTERVAL, RP\_SET\_DATA\_INTERVAL\_INFTY, and RP\_SET\_DATA\_INTERVAL\_ALL defined in the logical database can be used to specify the data records to be provided.

-   If only the addition AS PERSON TABLE is specified, the internal table is filled with the event [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) group. All data records of all personnel numbers are provided that are in the included structure ALL\_PERNRS of the structure group and for which there is authorization. Only those data records are provided which fall in the evaluation time period on the selection screen. Alternatively, the macros RP\_SET\_DATA\_INTERVAL, RP\_SET\_DATA\_INTERVAL\_INFTY, and RP\_SET\_DATA\_INTERVAL\_ALL defined in the logical database can be used to specify the data records to be provided.

-   If only the addition AS PERSON TABLE together with MODE P is specified, the internal table is filled with the event [GET person](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm). All data records of all personnel numbers are provided that are in the included structure ALL\_PERNRS of the structure person. No authorization check is executed and all existing data records are displayed in every case regardless of how the evaluation period was set on the selection screen. The use of the macros RP\_SET\_DATA\_INTERVAL, RP\_SET\_DATA\_INTERVAL\_INFTY, and RP\_SET\_DATA\_INTERVAL\_ALL is also ignored here.

If the addition MODE N is specified, the table is not associated with the logical databases and is not filled with the GET events.

Note

For more information, see the documentation about the logical databases and particularly the PNPCE documentation.

Addition 5

... VALID FROM intlim1 TO intlim2

Effect

If the addition VALID FROM is not specified, the components BEGDA and ENDDA of the info type Pnnnn are set implicitly as the interval boundaries for the [obsolete form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide_obsolete.htm) of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm). If the addition VALID FROM is specified, other [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like components intlim1 and intlim2 of the info type can be set as implicit interval boundaries.
