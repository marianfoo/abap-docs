  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) → 

Runtime Analysis in Release 4.0

[1\. Measuring specific units](#!ABAP_MODIFICATION_1@1@)
[2\. Transferring the performance data file from/to a local file](#!ABAP_MODIFICATION_2@2@)
[3\. Testing a function module within runtime analysis](#!ABAP_MODIFICATION_3@3@)
[4\. New statements for ABAP Objects](#!ABAP_MODIFICATION_4@4@)
[5\. Additional statements for internal tables](#!ABAP_MODIFICATION_5@5@)
[6\. Additional option With memory management during execution](#!ABAP_MODIFICATION_6@6@)
[7\. Enhancements in the table hit list](#!ABAP_MODIFICATION_7@7@)
[8\. Increase of profile parameter abap/atrasizequota](#!ABAP_MODIFICATION_8@8@)
[9\. User interface changes](#!ABAP_MODIFICATION_9@9@)

Modification 1

Measuring specific units
You can use new keywords or the System menu to measure various program units. Each unit is available under the menu option Runtime Analysis On. The individual units measured are available under the option Runtime Analysis.
The overview screen specifies the total time (as if the complete program had been measured). To see the overview screen for a specific unit, double-click on the line Runtime Analysis On in the hierarchy.

-   Static activation of runtime measurement
    using the keywords SET RUN TIME ANALYZER ON and SET RUN TIME ANALYZER OFF.
    
-   Dynamic activation of runtime measurement via System → Utilities → Runtime analysis → Switch off or using the function code /RON und /ROFF.
    For further information refer to development request 92212.
    

Modification 2

Transferring the performance data file from/to a local file

-   To local file
    You can transfer a performance data file to a local file and retrieve it later. It is thus possible to save performance data files.
    
-   From local file
    A performance data file transferred to a local file can be retrieved from this local file. The user must ensure that the local file is deleted at operating system level if it is no longer required.
    

Modification 3

Testing a function module within runtime analysis

Modification 4

New statements for ABAP Objects
Within ABAP Objects the following new statements are measured: CALL METHOD, RAISE EVENT and CREATE OBJECT

Modification 5

Additional statements for internal tables
The following statements for internal tables can be measured:
SORT, COLLECT, APPEND, INSERT, MODIFY, DELETE, READ TABLE.

Modification 6

Additional option With memory management during execution
If the button With memory management is selected, the following are measured:

-   Memory: (Re-)allocate, release
    
-   Transfer of data and data control blocks
    
-   [PXA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpxa_glosry.htm "Glossary Entry"): find, generate
    
-   [Screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") synchronization
    

Modification 7

Enhancements in the table hit list

-   Navigation to table definition
    To go to the table definition in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry"), double-click on the table name.
    
-   The development class (package) for each table is displayed in a separate column
    

Modification 8

Increase of profile parameter abap/atrasizequota
The profile parameter abap/atrasizequota now defaults to 30 MB (no longer to 10 MB).

Modification 9

Interface changes

-   Runtime analysis → Transfer file →
    
-   To local file...
    
-   From local file...
    
-   Utilities → Display table