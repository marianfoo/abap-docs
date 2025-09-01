  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-OTHERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Further Changes in ABAP Release 6.10

[1\. Dynamic Pass by Parameter in CALL FUNCTION](#!ABAP_MODIFICATION_1@1@)
[2\. New Predicate Expression IS BOUND](#!ABAP_MODIFICATION_2@2@)
[3\. Negated Relational Operators](#!ABAP_MODIFICATION_3@3@)
[4\. Unconditional Exit from a Processing Block](#!ABAP_MODIFICATION_4@4@)
[5\. Extended Search in the Keyword Documentation](#!ABAP_MODIFICATION_5@5@)
[6\. Runtime Analysis](#!ABAP_MODIFICATION_6@6@)
[7\. Calling Predefined Arithmetic Functions](#!ABAP_MODIFICATION_7@7@)
[8\. Transformation of XML Data into ABAP Variables](#!ABAP_MODIFICATION_8@8@)
[9\. Displaying the Generation Limits in the Program Check](#!ABAP_MODIFICATION_9@9@)
[10\. Increase in Line Length in ABAP Editor](#!ABAP_MODIFICATION_10@10@)
[11\. Enhancement of the MESSAGE Statement](#!ABAP_MODIFICATION_11@11@)
[12\. Displaying Exceptions for Runtime Errors](#!ABAP_MODIFICATION_12@12@)
[13\. Separate Logical Units of Work for Application and Generation](#!ABAP_MODIFICATION_13@13@)
[14\. Minimum and Maximum Values for Elementary Data Types](#!ABAP_MODIFICATION_14@14@)
[15\. Name for a Component in the Structure Buffer](#!ABAP_MODIFICATION_15@15@)
[16\. Reading a Program Title](#!ABAP_MODIFICATION_16@16@)
[17\. New Medium for Data Clusters](#!ABAP_MODIFICATION_17@17@)
[18\. Selecting and Deleting Data Clusters](#!ABAP_MODIFICATION_18@18@)
[19\. New Additions for INSERT REPORT](#!ABAP_MODIFICATION_19@19@)

Modification 1   

Dynamic Pass by Parameter in CALL FUNCTION

The addition [PARAMETER-TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) can be used to fill the interface of a function module with parameters dynamically. The addition [EXCEPTION-TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) is used to pass a table of exceptions to the called function module. At the same time, the number value to be assigned to the system field sy-subrc after the exception is raised is passed to the component VALUE.

Modification 2   

New Predicate Expression IS BOUND

The predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm) indicates whether a reference variable contains a valid reference.

Modification 3   

Negated Relational Operators

A new word order has been introduced for the negation of the following relational operators. Instead of IF NOT (f IS INITIAL), the spelling IF f IS NOT INITIAL is now possible. This word order is available for the following relational operators:

-   [*\[*NOT*\]* BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm)
-   [*\[*NOT*\]* IN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm)
-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)
-   [IS *\[*NOT*\]* ASSIGNED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_assigned.htm)
-   [IS *\[*NOT*\]* REQUESTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_requested.htm)
-   [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm)

Modification 4   

Unconditional Exit from a Processing Block

The new statement [RETURN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreturn.htm) can be used to exit a [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") explicitly.

Modification 5   

Extended Search in the Keyword Documentation

The keyword documentation has been enhanced in such a way that more general terms like RADIOBUTTON, INNER JOIN, or FOR ALL ENTRIES are now also processed. Until now the system only searched for keywords like DATA or CLASS. If a number of documents contain the same term, the search can be limited in the hit list. A further improvement is that the system displays the found document at the relevant point.

Modification 6   

Runtime Analysis

From now on, the runtime analysis can also be called within a program unit by calling the methods ON or OFF from the class CL\_ABAP\_TRACE\_SWITCH. Additionally, the measurement restrictions now have an input help for [program types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_glosry.htm "Glossary Entry") and the Tips and Tricks interface has been completely redesigned and now includes a tree structure and a text editor.

Modification 7   

Calling Predefined Arithmetic Functions

In expressions, the [arithmetic functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm) can be used at the same positions as [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry"). The following cases are supported:

-   Source fields of the [MOVE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_obs.htm) statement
-   Arithmetic expressions of the [COMPUTE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm) statement
-   Logical [expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)
-   The [CASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase.htm) statement of the CASE control structure
-   The [WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen.htm) statement of the CASE control structure
-   The [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) condition in the LOOP AT statement

Modification 8   

Transformation of XML Data into ABAP Variables

Another new addition is the [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm) statement, which enables the transformation of [XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxml_glosry.htm "Glossary Entry") data into ABAP variable content. The following transformations are possible:

-   XML to ABAP
-   ABAP to XML
-   ABAP to ABAP
-   XML to XML

Modification 9   

Displaying the Generation Limits in the Program Check

When choosing Program → Check → Generation Limits in the ABAP Editor menu, the system displays the load size and the available kernel resources for the selected program.

Modification 10   

Increase in Line Length in ABAP Editor

From now on, ABAP programs support a line length of 255 characters instead of 72 characters. Literals or statement lists that exceed a line with 72 characters now produce a syntax error. However, this only affects programs that are modified in an editor with a line length of more than 72 characters.

Modification 11   

Enhancement of the MESSAGE Statement

The form MESSAGE msg TYPE t is a new in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm). It produces direct output of character strings or other strings. This option is designed for exception classes that have exception texts of data type string.

The new addition DISPLAY LIKE can also be used to modify the icons in the display of the [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry").

Modification 12   

Displaying Exceptions for Runtime Errors

The display of runtime errors now includes the columns Name of Runtime Error and Exception. The same fields are also displayed and explained in the [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry"), immediately after an uncaught runtime error.

Modification 13   

Separate Logical Units of Work for Application and Generation

If a program was not modified by its own logical unit of work ([LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_transaction.htm)), generation is started in a separate work process when the program is used. The program is generated in the same work process only if no other work process is free.

If, for example, modified programs were used in a background process, these were only accessible to other users after the background process was finished. After the program was generated, the system could not trigger a [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm), since this may have caused inconsistencies in the background processing data. The separation of application and generation now ensures that a program is available to other applications immediately after it is generated.

Modification 14   

Minimum and Maximum Values for Elementary Data Types

The class CL\_ABAP\_EXCEPTIONAL\_VALUES provides the methods GET\_MAX\_VALUE and GET\_MIN\_VALUE, which are used to establish the value ranges of the elementary [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_simple.htm).

Modification 15   

Name for a Component in the Structure Buffer

Previously, if you used [<ASSIGN COMPONENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm) to access components of a Dictionary structure, then up to now the statement DESCRIBE FIELD ... HELP-ID returned the name of the corresponding data element. The name of the component of the dictionary structure is now returned instead. The following program now produces the value TRDIR-NAME instead of PROGRAMM.

Example

DATA: mydir     TYPE trdir,
      hlpid(61) type c.
FIELD-SYMBOLS <fs> TYPE ANY.
ASSIGN mydir TO <fs>.
ASSIGN COMPONENT 1 OF STRUCTURE <fs> TO <fs>.
DESCRIBE FIELD <fs> HELP-ID hlpid.
WRITE / hlpid.

Modification 16   

Reading a Program Title

Previously, the program title was read from the ABAP text elements using the statement [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_textpool.htm). For performance and buffering reasons, the program title is now read from the table TRDIRT.

Modification 17   

New Medium for Data Clusters

The medium SHARED MEMORY has been added to the statements [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm). Unlike the variant SHARED BUFFER, whose memory is automatically modified after a displacement, memories must be managed explicitly if this type of repository is used. To do this, the statement [DELETE FROM SHARED MEMORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_cluster.htm) or a method of the class CL\_ABAP\_EXPIMP\_SHMEM can be used.

Modification 18   

Selecting and Deleting Data Clusters

There are new methods in the following classes for selecting and deleting data clusters:

-   CL\_ABAP\_EXPIMP\_MEM
-   CL\_ABAP\_EXPIMP\_SHMEM
-   CL\_ABAP\_EXPIMP\_SHBUF
-   CL\_ABAP\_EXPIMP\_DB

Modification 19   

New Additions for INSERT REPORT

The following new additions are available for the statement [INSERT REPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_report.htm):

-   ... KEEPING DIRECTORY ENTRY
-   ... DIRECTORY ENTRY trdir
-   ... UNICODE ENABLING uc
-   ... FIXED-POINT ARITHMETIC fp
-   ... PROGRAM TYPE pt
-   ... MAXIMUM WIDTH INTO w