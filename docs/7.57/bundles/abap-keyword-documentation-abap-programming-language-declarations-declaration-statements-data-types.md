# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types and Data Objects / Special Declarations

Included pages: 2


### abendeclarations_spcl.htm

---
title: "Special Declarations"
description: |
  These language elements should be used only by specialists with in-depth knowledge of the corresponding environment. -   INFOTYPES(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm) INFOTYPES(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations_spcl.htm"
abapFile: "abendeclarations_spcl.htm"
keywords: ["do", "if", "data", "types", "abendeclarations", "spcl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Special Declarations, ABENDECLARATIONS_SPCL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

Special Declarations

These language elements should be used only by specialists with in-depth knowledge of the corresponding environment.

-   [INFOTYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm)

Continue
[INFOTYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm)


### abapinfotypes.htm

---
title: "INFOTYPES"
description: |
  This statement should be used by specialists only. In-depth knowledge of the corresponding environment is essential. This environment is not part of ABAP and is not documented here. Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes_shortref.htm) Syntax INFOTY
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm"
abapFile: "abapinfotypes.htm"
keywords: ["select", "do", "while", "if", "try", "class", "data", "types", "internal-table", "abapinfotypes"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Special Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations_spcl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INFOTYPES, ABAPINFOTYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

INFOTYPES

This statement should be used by specialists only.
In-depth knowledge of the corresponding environment is essential.
This environment is not part of ABAP and is not documented here.

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes_shortref.htm)

Syntax

INFOTYPES nnnn *\[*NAME name*\]*
               *\[*OCCURS n*\]*
               *\[*MODE N*|*P*\]*
               *\[*AS PERSON TABLE*\]*
               *\[*VALID FROM intlim1 TO intlim2*\]*.

Additions:

[1\. ... NAME name](#!ABAP_ADDITION_1@1@)
[2\. ... OCCURS n](#!ABAP_ADDITION_2@2@)
[3\. ... MODE N*|*P](#!ABAP_ADDITION_3@3@)
[4\. ... AS PERSON TABLE](#!ABAP_ADDITION_4@4@)
[5\. ... VALID FROM intlim1 TO intlim2](#!ABAP_ADDITION_5@5@)

Effect

Declaration of an internal table for HR [info types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninfo_type_glosry.htm "Glossary Entry") that is forbidden in classes. Without the addition NAME, an internal table pnnnn or ppnnnn is created with the structure of the info type Pnnnn and a [header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"). The name ppnnnn is used when the addition AS PERSON TABLE is specified, otherwise it is pnnnn.

As long as the addition MODE N is not specified, the statement INFOTYPES affects the behavior of the special [logical databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") PAP, PCH, PNP, and PNPCE of the human resources component HR by default and is the prerequisite for them to function correctly.

A four-digit numeric key of an info type of the SAP ERP component Human Resources (HR) must be specified for nnnn. Each info type is represented in the HR component by a special structure called Pnnnn in the ABAP Dictionary. Each info type contains the character-like components BEGDA and ENDDA.

Hints

-   The internal table created by the statement INFOTYPES can also be declared using the following (obsolete) statement sequence, but has no effect on the special logical databases.
    
    [DATA BEGIN OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm) *{*pnnnn*|*ppnnnn*|*name*}* [OCCURS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm) *{* 10 *|* n *}*.
      [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type.htm) pnnnn.
    DATA END OF *{*pnnnn*|*ppnnnn*|*name*}*
         [VALID BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm) *{*begda*|*intlim1*}* AND *{*endda*|*intlim2*}*.
    
-   No internal tables with header lines can be declared in classes. For this reason, the statement INFOTYPES is forbidden here.
-   In executable programs that are linked to the special logical databases PAP, PCH, PNP, and PNPCE of the Human Resources component, the statement INFOTYPES is still required and should only be used here.
-   PNPCE is by far the most important of the logical databases PAP, PCH, PNP, and PNPCE. The logical database PAP, on the other hand, is hardly used anymore.
-   Info types enable an HR application to effectively process employee-related data. The special statement [PROVIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprovide.htm) is used for this.
-   To ensure that the statement works correctly on the logical databases, it must be executed in the [global declaration part](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") and before the first operational statements of an executable program.
-   The properties of the special logical databases determined by the statement INFOTYPES can be changed by macros defined there while the program is executed. For the logical database PNPCE, these are the macros pnp\_set\_infty\_mode\_by\_name and pnp\_set\_infty\_mode\_by\_number for changing the mode and rp\_set\_data\_interval, rp\_set\_data\_interval\_infty, and rp\_set\_data\_interval\_all for setting the validity period.

Addition 1   

... NAME name

Effect

Using the addition NAME, a name of up to 20 characters can be specified that is then used for the internal table instead of pnnnn or ppnnnn.

Addition 2   

... OCCURS n

Effect

Without the addition OCCURS, the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") of the internal table is set to ten rows. The addition OCCURS can be used to specify a numeric literal directly or a numeric constant n, to determine a different initial memory requirement.

Addition 3   

... MODE N*|*P

Addition 4   

... AS PERSON TABLE

Effect

These additions affect the behavior of the special logical databases PAP, PCH, PNP, and PNPCE of the Human Resources component, whereby AS PERSON TABLE and MODE P only have an effect on the logical database PNPCE.

If the addition MODE N is not specified, the properties of the internal table are stored in an internal system table that is accessed in this logical database. If the statement INFOTYPES is listed without the addition MODE N in an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked to one of these logical databases, the behavior is as follows:

-   The logical database PAP fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) applicant.
-   The logical database PCH fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) object.
-   The logical database PNP fills the internal table for the event [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) pernr.
-   The behavior of the logical database PNPCE can also be controlled using the additions AS PERSON TABLE and MODE P:
    -   Without one of these additions, the internal table is filled at the event [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) pernr. Only those data records are provided that fall within the specified evaluation period on the selection screen (this is a difference to the logical database PNP, which provides all data records by default). Alternatively, the macros rp\_set\_data\_interval, rp\_set\_data\_interval\_infty, and rp\_set\_data\_interval\_all defined in the logical database can be used in the program to specify the data records that are to be provided.
    -   If only the addition AS PERSON TABLE is specified, the internal table is filled with the event [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) group. The data records of all personnel numbers that are in the included structure all\_pernrs of the structure group and for which there is authorization are provided. Only those data records are provided which fall in the evaluation period specified on the selection screen. Alternatively, the macros rp\_set\_data\_interval, rp\_set\_data\_interval\_infty, and rp\_set\_data\_interval\_all defined in the logical database can be used in the program to specify the data records that are to be provided.
    -   If only the addition AS PERSON TABLE is specified together with MODE P, the internal table is filled at the event [GET person](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm). The data records of all personnel numbers that are in the included structure all\_pernrs of the structure person are provided. No authorization check is executed and all existing data records are provided regardless of how the evaluation period was set on the selection screen. The use of the macros rp\_set\_data\_interval, rp\_set\_data\_interval\_infty, and rp\_set\_data\_interval\_all has no effect on this.

If the addition MODE N is specified, the table is not linked to the logical databases and is not filled during the GET events.

Hint

For more information, see the documentation about the logical databases and particularly about the PNPCE documentation.

Addition 5   

... VALID FROM intlim1 TO intlim2

Effect

Without the addition VALID FROM, the components BEGDA and ENDDA of the info type Pnnnn are defined implicitly as the interval limits for the [obsolete form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprovide_obsolete.htm) of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprovide.htm). With the addition VALID FROM, other [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like components intlim1 and intlim2 of the info type can be defined as implicit interval limits.
