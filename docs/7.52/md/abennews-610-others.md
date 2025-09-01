  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Further Changes in Release 6.10

[1\. Dynamic pass by parameter in CALL FUNCTION](#!ABAP_MODIFICATION_1@1@)
[
2\. New comparison expression IS BOUND](#!ABAP_MODIFICATION_2@2@)
[
3\. Negated relational operators](#!ABAP_MODIFICATION_3@3@)
[
4\. Unconditional exit from a processing block](#!ABAP_MODIFICATION_4@4@)
[
5\. Extended/advanced search of/in the keyword documentation](#!ABAP_MODIFICATION_5@5@)
[
6\. Runtime analysis](#!ABAP_MODIFICATION_6@6@)
[
7\. Calling predefined arithmetic functions](#!ABAP_MODIFICATION_7@7@)
[
8\. Transformation of XML data into ABAP variables](#!ABAP_MODIFICATION_8@8@)
[
9\. Displaying the generation limits in the program check](#!ABAP_MODIFICATION_9@9@)
[
10\. Increase in line length in ABAP Editor](#!ABAP_MODIFICATION_10@10@)
[
11\. Enhancement of the MESSAGE statement](#!ABAP_MODIFICATION_11@11@)
[
12\. Displaying exceptions for runtime errors](#!ABAP_MODIFICATION_12@12@)
[
13\. Separate logical units of work for application and generation](#!ABAP_MODIFICATION_13@13@)
[
14\. Minimum and maximum values for elementary data types](#!ABAP_MODIFICATION_14@14@)
[
15\. Name for a component in the structure buffer](#!ABAP_MODIFICATION_15@15@)
[
16\. Reading a program title](#!ABAP_MODIFICATION_16@16@)
[
17\. New medium for data clusters](#!ABAP_MODIFICATION_17@17@)
[
18\. Selecting and deleting data clusters](#!ABAP_MODIFICATION_18@18@)
[
19\. New additions for INSERT REPORT](#!ABAP_MODIFICATION_19@19@)

Modification 1

Dynamic Pass by Parameter in CALL FUNCTION

The addition [PARAMETER-TABLE itab](javascript:call_link\('abapcall_function.htm'\)) can be used to fill the interface of a function module with parameters dynamically. The addition [EXCEPTION-TABLE itab](javascript:call_link\('abapcall_function.htm'\)) is used to pass a table of exceptions to the called function module. At the same time, the number value to be assigned to the system field SY-SUBRC after the exception is raised is passed to the component VALUE.

Modification 2

New Comparison Expression IS BOUND

The comparison expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) indicates whether a reference variable contains a valid reference.

Modification 3

Negated Relational Operators

A new word order has been introduced for the negation of the following relational operators. Instead of IF NOT (f IS INITIAL), the spelling IF f IS NOT INITIAL is now possible. This word order is available for the following relational operators:

1.  [*\[*NOT*\]* BETWEEN](javascript:call_link\('abenlogexp_between.htm'\))
2.  [*\[*NOT*\]* IN](javascript:call_link\('abenlogexp_select_option.htm'\))
3.  [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))
4.  [IS *\[*NOT*\]* ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\))
5.  [IS *\[*NOT*\]* REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\))
6.  [IS *\[*NOT*\]* SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\))
    

Modification 4

Unconditional Exit from a Processing Block

The new statement [RETURN](javascript:call_link\('abapreturn.htm'\)) can be used to exit a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") explicitly.

Modification 5

Extended/Advanced Search of/in the Keyword Documentation

The keyword documentation has been enhanced in such a way that more general terms like RADIOBUTTON, INNER JOIN, or FOR ALL ENTRIES are now also processed. Until now the system only searched for keywords like DATA or CLASS. If a number of documents contain the same term, the search can be limited in the hit list. A further improvement is that the system displays the found document at the relevant point.

Modification 6

Runtime Analysis

From now on, the runtime analysis can also be called within a program unit by calling the methods ON/OFF from the class CL\_ABAP\_TRACE\_SWITCH. Additionally, the measurement restrictions now have an input help for [program types](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") and the Tips and Tricks interface has been completely redesigned and now includes a tree structure and a text editor.

Modification 7

Calling Predefined Arithmetic Functions

In expressions, the [arithmetic functions](javascript:call_link\('abapcompute_arith.htm'\)) can be used at the same positions as [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"). The following cases are supported:

1.  Source fields of the [MOVE](javascript:call_link\('abapmove_obs.htm'\)) statement
2.  Arithmetic expressions of the [COMPUTE](javascript:call_link\('abapcompute_arith.htm'\)) statement
3.  Logical [expressions](javascript:call_link\('abenlogexp.htm'\))
4.  The [CASE](javascript:call_link\('abapcase.htm'\)) statement of the CASE control structure
5.  The [WHEN](javascript:call_link\('abapwhen.htm'\)) statement of the CASE control structure
6.  The [WHERE](javascript:call_link\('abaploop_at_itab.htm'\)) condition in the LOOP AT statement
    

Modification 8

Transformation of XML Data into ABAP Variables

Another new addition is the [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) statement, which enables the transformation of [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") data into ABAP variable content. The following transformations are possible:

1.  XML to ABAP
2.  ABAP to XML
3.  ABAP to ABAP
4.  XML to XML
    

Modification 9

Displaying the Generation Limits in the Program Check

When choosing Program → Check → Generation Limits in the ABAP Editor menu, the system displays the load size and the available kernel resources for the selected program.

Modification 10

Increase in Line Length in ABAP Editor

From now on, ABAP programs support a line length of 255 characters instead of 72 characters. Literals or statement lists that exceed a line with 72 characters now produce a syntax error. However, this only affects programs that are modified in an editor with a line length of more than 72 characters.

Modification 11

Enhancement of the MESSAGE Statement

The form MESSAGE msg TYPE t is a new in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). It produces direct output of character strings or other strings. This option is designed for exception classes that have exception texts of data type STRING.

The new addition DISPLAY LIKE can also be used to modify the icons in the display of the [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").

Modification 12

Displaying Exceptions for Runtime Errors

The display of runtime errors now includes the columns Name of Runtime Error and Exception. The same fields are also displayed and explained in the [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry"), immediately after an uncaught runtime error.

Modification 13

Separate Logical Units of Work for Application and Generation

If a program was not modified by its own logical unit of work ([LUW](javascript:call_link\('abendb_transaction.htm'\))), generation is started in a separate work process when the program is used. The the program is generated in the same work process only if no other work process is free.

If, for example, modified programs were used in a background process, these were only accessible to other users after the background process was finished. After the program was generated, the system could not trigger a [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), since this may have caused inconsistencies in the background processing data. The separation of application and generation now ensures that a program is available to other applications immediately after it is generated.

Modification 14

Minimum and Maximum Values for Elementary Data Types

The class CL\_ABAP\_EXCEPTIONAL\_VALUES provides the methods GET\_MAX\_VALUE and GET\_MIN\_VALUE, which are used to establish the value ranges of the elementary [data types](javascript:call_link\('abapdata_simple.htm'\)). These methods replace the function module MAXIMAL\_VALUE\_GET.

Modification 15

Name for a Component in the Structure Buffer

Previously, if [ASSIGN COMPONENT](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) was used to access components of a dictionary structure, the statement DESCRIBE FIELD ... HELP-ID was used to return the name of the associated data element. The name of the component of the dictionary structure is now returned instead. The following program now produces the value TRDIR-NAME instead of PROGRAMM.

PROGRAM test\_struc.
DATA: mydir     TYPE trdir,
      hlpid(61) type c.
FIELD-SYMBOLS <fs>.
ASSIGN mydir TO <fs>.
ASSIGN COMPONENT 1 OF STRUCTURE <fs> TO <fs>.
DESCRIBE FIELD <fs> HELP-ID hlpid.
WRITE / hlpid.

Modification 16

Reading a Program Title

Previously, the program title was read from the ABAP text elements using the statement [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)). For performance and buffering reasons, the program title is now read from the table TRDIRT.

Modification 17

New Medium for [Data Clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry")

The medium SHARED MEMORY has been added to the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)). Unlike the variant SHARED BUFFER, whose memory is automatically modified after a displacement, memories must be managed explicitly if this type of repository is used. To do this, the statement [DELETE FROM SHARED MEMORY](javascript:call_link\('abapdelete_cluster.htm'\)) or a method of the class CL\_ABAP\_EXPIMP\_SHMEM can be used.

Modification 18

Selecting and Deleting Data Clusters

There are new methods in the following classes for selecting and deleting data clusters:

1.  CL\_ABAP\_EXPIMP\_MEM
2.  CL\_ABAP\_EXPIMP\_SHMEM
3.  CL\_ABAP\_EXPIMP\_SHBUF
4.  CL\_ABAP\_EXPIMP\_DB
    

Modification 19

New Additions for INSERT REPORT

The following new additions are available for the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)):

1.  ... KEEPING DIRECTORY ENTRY
2.  ... DIRECTORY ENTRY trdir
3.  ... UNICODE ENABLING uc
4.  ... FIXED-POINT ARITHMETIC fp
5.  ... PROGRAM TYPE pt
6.  ... MAXIMUM WIDTH INTO w