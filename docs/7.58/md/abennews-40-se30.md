  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) →  [News for ABAP Release 4.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Runtime%20Analysis%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-SE30%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Runtime Analysis in ABAP Release 4.0

[1\. Measuring Specific Units](#!ABAP_MODIFICATION_1@1@)
[2\. Transferring the Performance Data File from or to a Local File](#!ABAP_MODIFICATION_2@2@)
[3\. Testing a Function Module within Runtime Analysis](#!ABAP_MODIFICATION_3@3@)
[4\. New Statements for ABAP Objects](#!ABAP_MODIFICATION_4@4@)
[5\. Additional Statements for Internal Tables](#!ABAP_MODIFICATION_5@5@)
[6\. Additional Option with memory management During Execution](#!ABAP_MODIFICATION_6@6@)
[7\. Improvements in the Table Hit List](#!ABAP_MODIFICATION_7@7@)
[8\. Increase of Profile Parameter abap/atrasizequota](#!ABAP_MODIFICATION_8@8@)
[9\. Interface Changes](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Measuring Specific Units

New keywords or the System menu can be used to measure various program units. Each unit is available under the menu option Runtime Analysis on. The individual units measured are available under Runtime Analysis.

The overview screen specifies the total time (as if the complete program had been measured). The overview screen for a specific unit can be displayed by double-clicking Runtime Analysis On in the hierarchy.

-   Static Activation of Runtime Measurement
    
    using the keywords SET RUN TIME ANALYZER ON and SET RUN TIME ANALYZER OFF.
    
-   Dynamically Activatable Runtime Measurement
    
    using System → Utilities → Runtime analysis → Activate and System → Utilities → Runtime Analysis → Deactivate or transaction /RON and /ROFF.
    
    See development request 92212.
    

Modification 2   

Transferring the Performance Data File from or to a Local File

The following is possible:

-   To local file
    
    A performance data file can be transferred to a local file and retrieved later. It is therefore now possible to save performance data files.
    
-   From local file
    
    A performance data file transferred to a local file can be retrieved from this local file. The user must ensure that the local file is deleted at operating system level if it is no longer required.
    

Modification 3   

Testing a Function Module within Runtime Analysis

Function modules can now be tested with Runtime Analysis.

Modification 4   

New Statements for ABAP Objects

For ABAP Objects, the following new statements are measured: CALL METHOD, RAISE EVENT and CREATE OBJECT

Modification 5   

Additional Statements for Internal Tables

The following statements for internal tables can be measured: SORT, COLLECT, APPEND, INSERT, MODIFY, DELETE, READ TABLE.

Modification 6   

Additional Option with memory management During Execution

If the With memory management button is selected, the following are measured:

-   Memory: (Re-)allocate, release
-   Using the data and data control blocks
-   [PXA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpxa_glosry.htm "Glossary Entry"): find, create
-   [Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") synchronization

Modification 7   

Improvements in the Table Hit List

The following improvements were made:

-   Navigation to table definition
    
    The table definition in the [repository](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_glosry.htm "Glossary Entry") can be displayed by double-clicking the table name.
    
-   The development class (package) for each table is displayed in a separate column

Modification 8   

Increase of Profile Parameter abap/atrasizequota

In the standard setting, profile parameter abap/atrasizequota is now set to 30 MB rather than 10 MB.

Modification 9   

Interface Changes

The following interfaces were changed:

-   Runtime analysis → Transfer File →
-   To Local File...
-   From Local File...
-   Utilities → Display Table