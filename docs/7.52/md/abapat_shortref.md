  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  A

AT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm)

Syntax

*\[*AT FIRST.
   ...
ENDAT.*\]*
  *\[*AT field\_groupi *\[*WITH field\_groupj*\]*.
    ...
  ENDAT.*\]*
    *\[*AT NEW comp1.
       ...
     ENDAT.
       ...
         *\[*AT NEW comp2.
            ...
         ENDAT.
           *\[*...*\]**\]**\]*
             *\[* ... *\]*
         *\[**\[**\[*...*\]*
         AT END OF comp2.
              ...
           ENDAT.*\]*
       ...
     AT END OF comp1.
       ...
     ENDAT.*\]*
*\[*AT LAST.
    ...
ENDAT*\]*.

Effect

[Control level processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry") within LOOPs using [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm) or [extraction datasets](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_extract.htm) (obsolete), where statement blocks enclosed in AT and ENDAT are executed depending on conditions.

Additions

-   FIRST
    First row of the internal table or the extraction dataset.
    
-   field\_groupi
    Row of the extraction dataset that was appended by the statement EXTRACT field\_groupi.
    
-   WITH field\_groupj
    Condition that the next row was appended by EXTRACT field\_groupj.
    
-   NEW comp1, NEW comp2, ...
    First row of a group with the same content in the components comp1, comp2, ... and in the components on the left of comp1, comp2, ...
    
-   END OF comp1, END OF comp2, ...
    Last row of a group with the same content in the components comp1, comp2, ... and in the components on the left of comp1, comp2, ...
    
-   LAST
    Last row of the internal table or the extraction dataset.