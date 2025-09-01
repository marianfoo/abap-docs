  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40.htm) → 

Runtime Analysis in Release 4.0

[1\. Measuring specific units](#!ABAP_MODIFICATION_1@1@)
[2\. Transferring the performance data file from/to a local file](#!ABAP_MODIFICATION_2@2@)
[3\. Testing a function module within runtime analysis](#!ABAP_MODIFICATION_3@3@)
[4\. New statements for ABAP Objects](#!ABAP_MODIFICATION_4@4@)
[5\. Additional statements for internal tables](#!ABAP_MODIFICATION_5@5@)
[6\. Additional option With memory management during execution](#!ABAP_MODIFICATION_6@6@)
[7\. Improvements in the table hit list](#!ABAP_MODIFICATION_7@7@)
[8\. Increase of profile parameter abap/atrasizequota](#!ABAP_MODIFICATION_8@8@)
[9\. Interface changes](#!ABAP_MODIFICATION_9@9@)

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

Transferring the Performance Data File from/to a Local File

-   To local file
    A performance data file can be transferred to a local file and retrieved later. It is therefore now possible to save performance data files.
    
-   From local file
    A performance data file transferred to a local file can be retrieved from this local file. The user must ensure that the local file is deleted at operating system level if it is no longer required.
    

Modification 3

Testing a Function Module Within Runtime Analysis

Modification 4

New Statements for ABAP Objects
For ABAP Objects, the following new statements are measured: CALL METHOD, RAISE EVENT and CREATE OBJECT

Modification 5

Additional Statements for Internal Tables
The following statements for internal tables can be measured:
SORT, COLLECT, APPEND, INSERT, MODIFY, DELETE, READ TABLE.

Modification 6

Additional Option With memory management During Execution
If the With memory management button is selected, the following are measured:

-   Memory: (Re-)allocate, release
    
-   Using the data and data control blocks
    
-   [PXA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpxa_glosry.htm "Glossary Entry"): find, create
    
-   [Dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") synchronization
    

Modification 7

Improvements in the Table Hit List

-   Navigation to table definition
    The table definition in the [repository](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_glosry.htm "Glossary Entry") can be displayed by double-clicking the table name.
    
-   The development class (package) for each table is displayed in a separate column
    

Modification 8

Increase of Profile Parameter abap/atrasizequota
In the standard setting, profile parameter abap/atrasizequota is now set to 30 MB rather than 10 MB.

Modification 9

Interface Changes

-   Runtime analysis → Transfer File →
    
-   To Local File...
    
-   From Local File...
    
-   Utilities → Display Table