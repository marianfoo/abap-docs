---
title: "Display BDEF Derived Type Components"
description: |
  This example allows multiple BDEF derived type components and their availability in variables typed with TYPE TABLE FOR ...(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and TYPE STRUCTURE FOR ...(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/aba
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_display_derived_type_abexa.htm"
abapFile: "abeneml_display_derived_type_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abeneml", "display", "derived", "type", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Display%20BDEF%20Derived%20Type%20Components%2C%20ABENEML_DISPLAY_DERIVED_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Display BDEF Derived Type Components

This example allows multiple BDEF derived type components and their availability in variables typed with [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm) to be explored.

The program makes use of three different RAP scenarios:

-   [RAP external numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_numbering_glosry.htm "Glossary Entry") (non-draft, non-late numbering)
-   [Late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm)
-   [Draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm)

The example is based on dummy [BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") and [behavior pools (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") that just serve the purpose of including many specifications to display a variety of BDEF derived type components in the output:

Scenario

Data model

BDEF

ABP

RAP external numbering

Root entity: DEMO\_MANAGED\_ROOT\_TEST
Child entity: DEMO\_MANAGED\_CHILD\_TEST

DEMO\_MANAGED\_ROOT\_TEST

BP\_DEMO\_MANAGED\_ROOT\_TEST

Late numbering

Root entity: DEMO\_MANAGED\_ROOT\_TEST\_LN
Child entity: DEMO\_MANAGED\_CHILD\_TEST\_LN

DEMO\_MANAGED\_ROOT\_TEST\_LN

BP\_DEMO\_MANAGED\_ROOT\_TEST\_LN

Draft

Root entity: DEMO\_MANAGED\_ROOT\_TEST\_DT
Child entity: DEMO\_MANAGED\_CHILD\_TEST\_DT

DEMO\_MANAGED\_ROOT\_TEST\_DT

BP\_DEMO\_MANAGED\_ROOT\_TEST\_DT

Note:

-   Since variables cannot be declared with many of the BDEF derived types outside of the implementation class (for example, in a program), the global class contains variables that are typed with the various BDEF derived types and methods (get\_comp and get\_comp\_table) that get the components.
-   The availability of components varies depending on the specification in the BDEF, for example, %is\_draft is only available for draft scenarios. %pid is only available for late numbering scenarios.
-   For example, in case of TYPE TABLE FOR INSTANCE FEATURES RESULTS, which is similar for several other types that require a certain specification in the BDEF, only those elements that are specified with features : instance are available as components.

Source Code   

REPORT demo\_rap\_display\_derived\_types.
TYPE-POOLS: vrm.
TYPES: BEGIN OF tty\_tab,
         name TYPE string,
       END OF tty\_tab.
DATA: table\_tab   TYPE STANDARD TABLE OF tty\_tab,
      struc\_tab   TYPE STANDARD TABLE OF tty\_tab,
      itab\_tab    TYPE STANDARD TABLE OF tty\_tab,
      itab\_struc  TYPE STANDARD TABLE OF tty\_tab,
      wa\_tab      LIKE LINE OF itab\_tab,
      wa\_struc    LIKE LINE OF struc\_tab,
      name\_tab    TYPE vrm\_id,
      name\_struc  TYPE vrm\_id,
      list\_tab    TYPE vrm\_values,
      list\_struc  TYPE vrm\_values,
      value\_tab   LIKE LINE OF list\_tab,
      value\_struc LIKE LINE OF list\_struc.
SELECTION-SCREEN COMMENT /1(70) TEXT-001.
"SELECTION-SCREEN BEGIN OF LINE.
PARAMETERS: tabbut RADIOBUTTON GROUP a.
PARAMETERS: tab\_type(40) AS LISTBOX VISIBLE LENGTH 40 DEFAULT 'CREATE'.
"SELECTION-SCREEN END OF LINE.
"SELECTION-SCREEN BEGIN OF LINE.
PARAMETERS: strbut RADIOBUTTON GROUP a.
PARAMETERS: str\_typ(40) AS LISTBOX VISIBLE LENGTH 40 DEFAULT 'DELETE'.
"SELECTION-SCREEN END OF LINE.
SELECTION-SCREEN ULINE.
SELECTION-SCREEN COMMENT /1(70) TEXT-002.
PARAMETERS: nonnumdr RADIOBUTTON GROUP grp,
            latenum  RADIOBUTTON GROUP grp,
            draft    RADIOBUTTON GROUP grp.
SELECTION-SCREEN ULINE.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main.
  PRIVATE SECTION.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF nonnumdr = 'X'.
      IF tabbut = 'X'.
        CASE tab\_type.
WHEN 'CREATE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_1 selection = tab\_type ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_2 selection = tab\_type ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_3 selection = tab\_type ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_4 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_5 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_5b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_7 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_7b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_7d selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_7f selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_7g selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_8 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_8b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9c selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9d selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9e selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9g selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9h selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_9j selection = tab\_type ).
WHEN 'HIERARCHY' .
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_48 selection = tab\_type ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_11 selection = tab\_type ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_12 selection = tab\_type ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_13 selection = tab\_type ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_14 selection = tab\_type ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_15 selection = tab\_type ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_16 selection = tab\_type ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_17 selection = tab\_type ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_18 selection = tab\_type ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_21 selection = tab\_type ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_21b selection = tab\_type ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_22 selection = tab\_type ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_23 selection = tab\_type ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_24 selection = tab\_type ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_25 selection = tab\_type ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_26 selection = tab\_type ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_27 selection = tab\_type ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_28 selection = tab\_type ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_29 selection = tab\_type ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_30 selection = tab\_type ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_31 selection = tab\_type ).
WHEN 'CHANGE'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_additional\_sav=>var\_tab\_c selection = tab\_type ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_33 selection = tab\_type ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_34 selection = tab\_type ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_39 selection = tab\_type ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_38 selection = tab\_type ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_40 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_41 selection = tab\_type ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_46 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test=>var\_t\_47 selection = tab\_type ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
      IF strbut = 'X'.
        CASE str\_typ.
WHEN 'CREATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var1 selection = str\_typ ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var2 selection = str\_typ ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var3 selection = str\_typ ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var4 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var5 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var5b selection = str\_typ ).
\*WHEN 'ACTION REQUEST (ACTION2)' .
\* bp\_demo\_managed\_root\_test=>get\_comp( gs =
\* bp\_demo\_managed\_root\_test=>var6 selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7b selection = str\_typ ).
WHEN 'ACTION REQUEST (ACTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7c selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7d selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7f selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var7g selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var8 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var8b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9c selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9d selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9e selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9f selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9g selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9h selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9i selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var9j selection = str\_typ ).
WHEN 'HIERARCHY' .
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var54 selection = str\_typ ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var11 selection = str\_typ ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var12 selection = str\_typ ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var13 selection = str\_typ ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var14 selection = str\_typ ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var15 selection = str\_typ ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var16 selection = str\_typ ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var17 selection = str\_typ ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var18 selection = str\_typ ).
WHEN 'PERMISSIONS REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var19 selection = str\_typ ).
WHEN 'PERMISSIONS RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var20 selection = str\_typ ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var21 selection = str\_typ ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var21b selection = str\_typ ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var22 selection = str\_typ ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var23 selection = str\_typ ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var24 selection = str\_typ ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var25 selection = str\_typ ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var26 selection = str\_typ ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var27 selection = str\_typ ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var28 selection = str\_typ ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var29 selection = str\_typ ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var30 selection = str\_typ ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var31 selection = str\_typ ).
WHEN 'CHANGE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_additional\_sav=>var\_struc\_c selection = str\_typ ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var33 selection = str\_typ ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var34 selection = str\_typ ).
WHEN 'GLOBAL FEATURES RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var35 selection = str\_typ ).
WHEN 'FEATURES REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var35b selection = str\_typ ).
WHEN 'INSTANCE FEATURES REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var36 selection = str\_typ ).
WHEN 'GLOBAL FEATURES REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var37 selection = str\_typ ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var38 selection = str\_typ ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var39 selection = str\_typ ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var40 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var41 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var42 selection = str\_typ ).
WHEN 'AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var43 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var44 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var45 selection = str\_typ ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var46 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var47 selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR CHANGE'.
\* bp\_demo\_managed\_root\_test=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_c selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR DELETE'.
\* bp\_demo\_managed\_root\_test=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_d selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var48 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var49 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var50 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var51 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var52 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED LATE'.
bp\_demo\_managed\_root\_test=>get\_comp( gs =
bp\_demo\_managed\_root\_test=>var53 selection = str\_typ ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
    ENDIF.
    IF latenum = 'X'.
      IF tabbut = 'X'.
        CASE tab\_type.
WHEN 'CREATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_1 selection = tab\_type ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_2 selection = tab\_type ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_3 selection = tab\_type ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_4 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_5 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_5b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_7 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_7b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_7d selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_7f selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_7g selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_8 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_8b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9c selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9d selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9e selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9g selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9h selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_9j selection = tab\_type ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_11 selection = tab\_type ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_12 selection = tab\_type ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_13 selection = tab\_type ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_14 selection = tab\_type ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_15 selection = tab\_type ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_16 selection = tab\_type ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_17 selection = tab\_type ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_18 selection = tab\_type ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_21 selection = tab\_type ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_21b selection = tab\_type ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_22 selection = tab\_type ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_23 selection = tab\_type ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_24 selection = tab\_type ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_25 selection = tab\_type ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_26 selection = tab\_type ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_27 selection = tab\_type ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_28 selection = tab\_type ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_29 selection = tab\_type ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_30 selection = tab\_type ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_31 selection = tab\_type ).
\* WHEN 'CHANGE'.
\* bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
\* bp\_demo\_managed\_additional\_sav=>var\_tab\_c selection = tab\_type ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_33 selection = tab\_type ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_34 selection = tab\_type ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_39 selection = tab\_type ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_38 selection = tab\_type ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_40 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_41 selection = tab\_type ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_46 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_ln=>var\_t\_47 selection = tab\_type ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
      IF strbut = 'X'.
        CASE str\_typ.
WHEN 'CREATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var1 selection = str\_typ ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var2 selection = str\_typ ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var3 selection = str\_typ ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var4 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var5 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var5b selection = str\_typ ).
\*WHEN 'ACTION REQUEST (ACTION2)' .
\* bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
\* bp\_demo\_managed\_root\_test\_ln=>var6 selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7b selection = str\_typ ).
WHEN 'ACTION REQUEST (ACTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7c selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7d selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7f selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var7g selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var8 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var8b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9c selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9d selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9e selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9f selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9g selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9h selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9i selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var9j selection = str\_typ ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var11 selection = str\_typ ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var12 selection = str\_typ ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var13 selection = str\_typ ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var14 selection = str\_typ ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var15 selection = str\_typ ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var16 selection = str\_typ ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var17 selection = str\_typ ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var18 selection = str\_typ ).
WHEN 'PERMISSIONS REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var19 selection = str\_typ ).
WHEN 'PERMISSIONS RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var20 selection = str\_typ ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var21 selection = str\_typ ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var21b selection = str\_typ ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var22 selection = str\_typ ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var23 selection = str\_typ ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var24 selection = str\_typ ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var25 selection = str\_typ ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var26 selection = str\_typ ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var27 selection = str\_typ ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var28 selection = str\_typ ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var29 selection = str\_typ ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var30 selection = str\_typ ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var31 selection = str\_typ ).
\* WHEN 'CHANGE'.
\* bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_struc\_c selection = str\_typ ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var33 selection = str\_typ ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var34 selection = str\_typ ).
WHEN 'GLOBAL FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var35 selection = str\_typ ).
WHEN 'FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var35b selection = str\_typ ).
WHEN 'INSTANCE FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var36 selection = str\_typ ).
WHEN 'GLOBAL FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var37 selection = str\_typ ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var38 selection = str\_typ ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var39 selection = str\_typ ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var40 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var41 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var42 selection = str\_typ ).
WHEN 'AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var43 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var44 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var45 selection = str\_typ ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var46 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var47 selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR CHANGE'.
\* bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_c selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR DELETE'.
\* bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_d selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var48 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var49 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var50 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var51 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var52 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED LATE'.
bp\_demo\_managed\_root\_test\_ln=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_ln=>var53 selection = str\_typ ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
    ENDIF.
    IF draft = 'X'.
      IF tabbut = 'X'.
        CASE tab\_type.
WHEN 'CREATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_1 selection = tab\_type ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_2 selection = tab\_type ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_3 selection = tab\_type ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_4 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_5 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_5b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_7 selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_7b selection = tab\_type ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_7d selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_7f selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_7g selection = tab\_type ).
WHEN 'ACTION IMPORT (EDIT)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_edit selection = tab\_type ).
WHEN 'ACTION IMPORT (ACTIVATE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_activate selection = tab\_type ).
WHEN 'ACTION IMPORT (DISCARD)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_discard selection = tab\_type ).
WHEN 'ACTION IMPORT (PREPARE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_prepare  selection = tab\_type ).
WHEN 'ACTION IMPORT (RESUME)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_resume selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_8 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_8b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9 selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9b selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9c selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9d selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9e selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9g selection = tab\_type ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9h selection = tab\_type ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_9j selection = tab\_type ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_11 selection = tab\_type ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_12 selection = tab\_type ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_13 selection = tab\_type ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_14 selection = tab\_type ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_15 selection = tab\_type ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_16 selection = tab\_type ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_17 selection = tab\_type ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_18 selection = tab\_type ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_21 selection = tab\_type ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_21b selection = tab\_type ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_22 selection = tab\_type ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_23 selection = tab\_type ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_24 selection = tab\_type ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_25 selection = tab\_type ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_26 selection = tab\_type ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_27 selection = tab\_type ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_28 selection = tab\_type ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_29 selection = tab\_type ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_30 selection = tab\_type ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_31 selection = tab\_type ).
\* WHEN 'CHANGE'.
\* bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
\* bp\_demo\_managed\_additional\_sav=>var\_tab\_c selection = tab\_type ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_33 selection = tab\_type ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_34 selection = tab\_type ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_39 selection = tab\_type ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_38 selection = tab\_type ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_40 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_41 selection = tab\_type ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_46 selection = tab\_type ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp\_table( gt =
bp\_demo\_managed\_root\_test\_dt=>var\_t\_47 selection = tab\_type ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
      IF strbut = 'X'.
        CASE str\_typ.
        WHEN 'CREATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var1 selection = str\_typ ).
WHEN 'CREATE BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var2 selection = str\_typ ).
WHEN 'UPDATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var3 selection = str\_typ ).
WHEN 'DELETE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var4 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var5 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var5b selection = str\_typ ).
\*WHEN 'ACTION REQUEST (ACTION2)' .
\* bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
\* bp\_demo\_managed\_root\_test\_dt=>var6 selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7 selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7b selection = str\_typ ).
WHEN 'ACTION REQUEST (ACTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7c selection = str\_typ ).
WHEN 'ACTION RESULT (ACTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7d selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7f selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var7g selection = str\_typ ).
WHEN 'ACTION IMPORT (EDIT)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var\_edit selection = str\_typ ).
WHEN 'ACTION IMPORT (ACTIVATE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var\_activate selection = str\_typ ).
WHEN 'ACTION IMPORT (DISCARD)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var\_discard selection = str\_typ ).
WHEN 'ACTION IMPORT (PREPARE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var\_prepare  selection = str\_typ ).
WHEN 'ACTION IMPORT (RESUME)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var\_resume selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var8 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION1)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var8b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9 selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION2)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9b selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9c selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION3)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9d selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9e selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9f selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION4)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9g selection = str\_typ ).
WHEN 'FUNCTION IMPORT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9h selection = str\_typ ).
WHEN 'FUNCTION REQUEST (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9i selection = str\_typ ).
WHEN 'FUNCTION RESULT (FUNCTION5)' .
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var9j selection = str\_typ ).
WHEN 'READ IMPORT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var11 selection = str\_typ ).
WHEN 'READ IMPORT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var12 selection = str\_typ ).
WHEN 'READ RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var13 selection = str\_typ ).
WHEN 'READ RESULT BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var14 selection = str\_typ ).
WHEN 'READ LINK BDEF\\\_ASSOC'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var15 selection = str\_typ ).
WHEN 'LOCK'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var16 selection = str\_typ ).
WHEN 'KEY OF'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var17 selection = str\_typ ).
WHEN 'PERMISSIONS KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var18 selection = str\_typ ).
WHEN 'PERMISSIONS REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var19 selection = str\_typ ).
WHEN 'PERMISSIONS RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var20 selection = str\_typ ).
WHEN 'DETERMINATION (ON MODIFY)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var21 selection = str\_typ ).
WHEN 'DETERMINATION (ON SAVE)'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var21b selection = str\_typ ).
WHEN 'VALIDATION'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var22 selection = str\_typ ).
WHEN 'FAILED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var23 selection = str\_typ ).
WHEN 'FAILED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var24 selection = str\_typ ).
WHEN 'FAILED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var25 selection = str\_typ ).
WHEN 'MAPPED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var26 selection = str\_typ ).
WHEN 'MAPPED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var27 selection = str\_typ ).
WHEN 'MAPPED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var28 selection = str\_typ ).
WHEN 'REPORTED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var29 selection = str\_typ ).
WHEN 'REPORTED EARLY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var30 selection = str\_typ ).
WHEN 'REPORTED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var31 selection = str\_typ ).
\* WHEN 'CHANGE'.
\* bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_struc\_c selection = str\_typ ).
WHEN 'FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var33 selection = str\_typ ).
WHEN 'INSTANCE FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var34 selection = str\_typ ).
WHEN 'GLOBAL FEATURES RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var35 selection = str\_typ ).
WHEN 'FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var35b selection = str\_typ ).
WHEN 'INSTANCE FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var36 selection = str\_typ ).
WHEN 'GLOBAL FEATURES REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var37 selection = str\_typ ).
WHEN 'INSTANCE FEATURES KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var38 selection = str\_typ ).
WHEN 'FEATURES KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var39 selection = str\_typ ).
WHEN 'AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var40 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var41 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION RESULT'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var42 selection = str\_typ ).
WHEN 'AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var43 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var44 selection = str\_typ ).
WHEN 'GLOBAL AUTHORIZATION REQUEST'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var45 selection = str\_typ ).
WHEN 'AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var46 selection = str\_typ ).
WHEN 'INSTANCE AUTHORIZATION KEY'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var47 selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR CHANGE'.
\* bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_c selection = str\_typ ).
\* WHEN 'TYPE REQUEST FOR DELETE'.
\* bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
\* bp\_demo\_managed\_additional\_sav=>var\_req\_d selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var48 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR FAILED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var49 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var50 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR MAPPED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var51 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var52 selection = str\_typ ).
WHEN 'TYPE RESPONSE FOR REPORTED LATE'.
bp\_demo\_managed\_root\_test\_dt=>get\_comp( gs =
bp\_demo\_managed\_root\_test\_dt=>var53 selection = str\_typ ).
          WHEN OTHERS.
            MESSAGE 'That is not possible.' TYPE 'I'
            DISPLAY LIKE 'E'.
        ENDCASE.
      ENDIF.
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
AT SELECTION-SCREEN.
AT SELECTION-SCREEN OUTPUT.
  itab\_tab = VALUE #( ( name = 'ACTION IMPORT (ACTION1)' )
                  ( name = 'ACTION IMPORT (ACTION2)' )
                  ( name = 'ACTION RESULT (ACTION2)' )
                  ( name = 'ACTION IMPORT (ACTION3)' )
                  ( name = 'ACTION RESULT (ACTION3)' )
                  ( name = 'ACTION IMPORT (ACTION4)' )
                  ( name = 'ACTION IMPORT (ACTION5)' )
                  ( name = 'AUTHORIZATION KEY' )
                  ( name = 'AUTHORIZATION RESULT' )
                  ( name = 'CHANGE' )
                  ( name = 'CREATE' )
                  ( name = 'CREATE BDEF\\\_ASSOC' )
                  ( name = 'DELETE' )
                  ( name = 'DETERMINATION (ON MODIFY)' )
                  ( name = 'DETERMINATION (ON SAVE)' )
                  ( name = 'FAILED' )
                  ( name = 'FAILED EARLY' )
                  ( name = 'FAILED LATE' )
                  ( name = 'FEATURES KEY' )
                  ( name = 'FEATURES RESULT' )
                  ( name = 'FUNCTION IMPORT (FUNCTION1)' )
                  ( name = 'FUNCTION RESULT (FUNCTION1)' )
                  ( name = 'FUNCTION IMPORT (FUNCTION2)' )
                  ( name = 'FUNCTION RESULT (FUNCTION2)' )
                  ( name = 'FUNCTION IMPORT (FUNCTION3)' )
                  ( name = 'FUNCTION RESULT (FUNCTION3)' )
                  ( name = 'FUNCTION IMPORT (FUNCTION4)' )
                  ( name = 'FUNCTION RESULT (FUNCTION4)' )
                  ( name = 'FUNCTION IMPORT (FUNCTION5)' )
                  ( name = 'FUNCTION RESULT (FUNCTION5)' )
                  ( name = 'INSTANCE AUTHORIZATION KEY' )
                  ( name = 'INSTANCE AUTHORIZATION RESULT' )
                  ( name = 'INSTANCE FEATURES KEY' )
                  ( name = 'INSTANCE FEATURES RESULT' )
                  ( name = 'KEY OF' )
                  ( name = 'LOCK' )
                  ( name = 'MAPPED' )
                  ( name = 'MAPPED EARLY' )
                  ( name = 'MAPPED LATE' )
                  ( name = 'READ IMPORT' )
                  ( name = 'READ IMPORT BDEF\\\_ASSOC' )
                  ( name = 'READ LINK BDEF\\\_ASSOC' )
                  ( name = 'READ RESULT' )
                  ( name = 'READ RESULT BDEF\\\_ASSOC' )
                  ( name = 'REPORTED' )
                  ( name = 'REPORTED EARLY' )
                  ( name = 'REPORTED LATE' )
                  ( name = 'UPDATE' )
                  ( name = 'VALIDATION' )
                  ( name = '---- ONLY POSSIBLE FOR DRAFT ----' )
                  ( name = 'ACTION IMPORT (EDIT)' )
                  ( name = 'ACTION IMPORT (ACTIVATE)' )
                  ( name = 'ACTION IMPORT (DISCARD)' )
                  ( name = 'ACTION IMPORT (PREPARE)' )
                  ( name = 'ACTION IMPORT (RESUME)' )
               ( name = '-- ONLY SELECT EXTERNAL NUMBERING FOR --' )
                  ( name = 'HIERARCHY' )
                ).
  LOOP AT itab\_tab INTO wa\_tab.
    value\_tab-key = wa\_tab-name.
    APPEND value\_tab TO list\_tab.
  ENDLOOP.
  name\_tab = 'tab\_type'.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = name\_tab
      values = list\_tab.
  "TYPE STRUCTURE FOR
  itab\_struc = VALUE #( ( name = 'ACTION IMPORT (ACTION1)' )
                    ( name = 'ACTION IMPORT (ACTION2)' )
                    "( name = 'ACTION REQUEST (ACTION2)' )
                    ( name = 'ACTION RESULT (ACTION2)' )
                    ( name = 'ACTION IMPORT (ACTION3)' )
                    ( name = 'ACTION REQUEST (ACTION3)' )
                    ( name = 'ACTION RESULT (ACTION3)' )
                    ( name = 'ACTION IMPORT (ACTION4)' )
                    ( name = 'ACTION IMPORT (ACTION5)' )
                    ( name = 'AUTHORIZATION KEY' )
                    ( name = 'AUTHORIZATION REQUEST' )
                    ( name = 'AUTHORIZATION RESULT' )
                    ( name = 'CHANGE' )
                    ( name = 'CREATE' )
                    ( name = 'CREATE BDEF\\\_ASSOC' )
                    ( name = 'DELETE' )
                    ( name = 'DETERMINATION (ON MODIFY)' )
                    ( name = 'DETERMINATION (ON SAVE)' )
                    ( name = 'FAILED' )
                    ( name = 'FAILED EARLY' )
                    ( name = 'FAILED LATE' )
                    ( name = 'FEATURES KEY' )
                    ( name = 'FEATURES REQUEST' )
                    ( name = 'FEATURES RESULT' )
                    ( name = 'FUNCTION IMPORT (FUNCTION1)' )
                    ( name = 'FUNCTION RESULT (FUNCTION1)' )
                    ( name = 'FUNCTION IMPORT (FUNCTION2)' )
                    ( name = 'FUNCTION RESULT (FUNCTION2)' )
                    ( name = 'FUNCTION IMPORT (FUNCTION3)' )
                    ( name = 'FUNCTION RESULT (FUNCTION3)' )
                    ( name = 'FUNCTION IMPORT (FUNCTION4)' )
                    ( name = 'FUNCTION REQUEST (FUNCTION4)' )
                    ( name = 'FUNCTION RESULT (FUNCTION4)' )
                    ( name = 'FUNCTION IMPORT (FUNCTION5)' )
                    ( name = 'FUNCTION REQUEST (FUNCTION5)' )
                    ( name = 'FUNCTION RESULT (FUNCTION5)' )
                    ( name = 'GLOBAL AUTHORIZATION REQUEST' )
                    ( name = 'GLOBAL AUTHORIZATION RESULT' )
                    ( name = 'GLOBAL FEATURES REQUEST' )
                    ( name = 'GLOBAL FEATURES RESULT' )
                    ( name = 'INSTANCE AUTHORIZATION KEY' )
                    ( name = 'INSTANCE AUTHORIZATION REQUEST' )
                    ( name = 'INSTANCE AUTHORIZATION RESULT' )
                    ( name = 'INSTANCE FEATURES KEY' )
                    ( name = 'INSTANCE FEATURES REQUEST' )
                    ( name = 'INSTANCE FEATURES RESULT' )
                    ( name = 'KEY OF' )
                    ( name = 'LOCK' )
                    ( name = 'MAPPED' )
                    ( name = 'MAPPED EARLY' )
                    ( name = 'MAPPED LATE' )
                    ( name = 'PERMISSIONS KEY' )
                    ( name = 'PERMISSIONS REQUEST' )
                    ( name = 'PERMISSIONS RESULT' )
                    ( name = 'READ IMPORT' )
                    ( name = 'READ IMPORT BDEF\\\_ASSOC' )
                    ( name = 'READ LINK BDEF\\\_ASSOC' )
                    ( name = 'READ RESULT' )
                    ( name = 'READ RESULT BDEF\\\_ASSOC' )
                    ( name = 'REPORTED' )
                    ( name = 'REPORTED EARLY' )
                    ( name = 'REPORTED LATE' )
                    ( name = 'UPDATE' )
                    ( name = 'VALIDATION' )
                    ( name = '---- ONLY POSSIBLE FOR DRAFT ----' )
                    ( name = 'ACTION IMPORT (EDIT)' )
                    ( name = 'ACTION IMPORT (ACTIVATE)' )
                    ( name = 'ACTION IMPORT (DISCARD)' )
                    ( name = 'ACTION IMPORT (PREPARE)' )
                    ( name = 'ACTION IMPORT (RESUME)' )
                    ( name = '---- OTHER STRUCTURE TYPES ----' )
\*                  ( name = 'TYPE REQUEST FOR CHANGE' )
\*                  ( name = 'TYPE REQUEST FOR DELETE' )
                    ( name = 'TYPE RESPONSE FOR FAILED' )
                    ( name = 'TYPE RESPONSE FOR FAILED LATE' )
                    ( name = 'TYPE RESPONSE FOR MAPPED' )
                    ( name = 'TYPE RESPONSE FOR MAPPED LATE' )
                    ( name = 'TYPE RESPONSE FOR REPORTED' )
                    ( name = 'TYPE RESPONSE FOR REPORTED LATE' )
                 ( name = '-- ONLY SELECT EXTERNAL NUMBERING FOR --' )
                    ( name = 'HIERARCHY' )
                  ).
  LOOP AT itab\_struc INTO wa\_struc.
    value\_struc-key = wa\_struc-name.
    APPEND value\_struc TO list\_struc.
  ENDLOOP.
  name\_struc = 'str\_typ'.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = name\_struc
      values = list\_struc.

Description   

The program allows a BDEF derived type to be chosen, either TYPE TABLE FOR ... or TYPE STRUCTURE FOR ..., and a RAP scenario (external numbering, late numbering and draft) to be selected. The output shows an initial internal table. The table's column names represent the BDEF derived type components that are available in the chosen BDEF derived type. In many cases, multiple component groups are available in BDEF derived types, for example, [%tky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_tky.htm) is often available if [%key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_key.htm) is available. These component groups are additionally displayed. Note that this example displays components and component groups on a high level. The availability of components and component groups depends on the specifications in the BDEF. Make sure to check the F2 help for your variables typed with BDEF derived types to get the full overview.