  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Debugger in Release 6.10

[1\. Displaying program attributes](#!ABAP_MODIFICATION_1@1@)
[
2\. Displaying data references](#!ABAP_MODIFICATION_2@2@)
[
3\. Special display of deep data objects](#!ABAP_MODIFICATION_3@3@)
[
4\. Setting breakpoints in methods](#!ABAP_MODIFICATION_4@4@)
[
5\. Support for class-based exceptions](#!ABAP_MODIFICATION_5@5@)
[
6\. Debugging mode for Business Server Pages with ABAP scripting](#!ABAP_MODIFICATION_6@6@)
[
7\. Inheriting breakpoints from HTTP and update sessions](#!ABAP_MODIFICATION_7@7@)
[
8\. Displaying statements for the database interface](#!ABAP_MODIFICATION_8@8@)
[
9\. Forward and backward navigation in the source code](#!ABAP_MODIFICATION_9@9@)
[
10\. Displaying memory use](#!ABAP_MODIFICATION_10@10@)
[
11\. Displaying the structure fragment view](#!ABAP_MODIFICATION_11@11@)

Modification 1

Displaying [Program Attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry")

If Goto → Further Information → Program Attributes is chosen in the menu, the system displays the attributes "Fixed Point Arithmetic", "System Program", and "Unicode Check".

Modification 2

Displaying Data References

If a data reference dref is double-clicked in the Field Names column, information about the technical attributes of the reference are displayed. If the Field Contents column is double-clicked, the contents of the data reference are displayed. The referenced object is displayed when the data reference dref->\* is double-clicked in the Field Names column.

Modification 3

Special Display of Deep Data Objects

The headers of strings, internal tables, and data references and object references are displayed if an asterisk is placed at the beginning of the name. For example, to display the header of the internal table itab in hexadecimal form, enter \*itab in the Field Name column. In the case of tables without headers, the field content only contains zeroes.

If the data object name is prefixed with an ampersand, the relevant reference of the strings, internal tables, data references, or object references is displayed in hexadecimal form. For example, specifying &str displays the reference to the string str.

Modification 4

Setting Breakpoints at Methods

A breakpoint can be set for a method by choosing Breakpoint → Breakpoint At → Method.

Modification 5

Support for Class-Based Exceptions

The following functions are available when an exception is raised:

1.  If the addition [INTO ref](javascript:call_link\('abapcatch_try.htm'\)) is missing from the statement CATCH, an exception object can be created in the debugger under Settings.
2.  If Display Exception Object is chosen, the attributes and interfaces of the exception class are displayed together with their contents.
3.  If Statement that Caused the Exception is chosen, the line of the source code containing the statement that raised the exception is displayed. The statement is marked explicitly in the source code.
    

Modification 6

Debugging Mode for Business Server Pages with ABAP Scripting

Business Server Pages ([BSP](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry")) can now be run in debugging mode. It is also possible to display and set breakpoints there. Business Server Pages can be displayed in Object Navigator by selecting an appropriate application under BSP Applications.

Modification 7

Inheriting Breakpoints from HTTP and Update Sessions

If an HTTP session or [update session](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") is called from a logical unit of work ([LUW](javascript:call_link\('abendb_transaction.htm'\))), new work processes are started for these sessions. Any breakpoints set in this calling LUW are inherited by the new sessions and can be displayed by choosing Breakpoints. For example, if the update module func is called using [CALL FUNCTION func IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)), the new work process is displayed in a new GUI window, provided update debugging is selected under Settings in debugging mode. Here, all the breakpoints set in the calling LUW can be processed.

Modification 8

Displaying Statements for the Database Interface

The most recent statements passed to the database now can be checked. Choose Goto → System → System Areas after the debugger is started and enter Area = OSQL in the input field.

Modification 9

Navigating Forwards and Backwards in the Source Code

If Debugging - > Goto Statement is chosen from the menu, the line containing the cursor is displayed. This allows simple forward and backward navigation within the displayed source code.

Modification 10

Displaying Memory Use

If Settings → Memory Display On/Off is chosen from the menu, the memory used by objects, tables, references, or individual fields is displayed. It distinguishes between allocated and referenced memory and also displays the memory actually used by every data object.

A hit list of the 25 data objects with the highest memory consumption can be displayed by choosing Goto → System → System Areas. The following values can be entered in the Area field:

1.  ITAB-TOP25 to display internal tables
2.  OBJ-TOP25 to display objects
3.  REF-TOP25 to display references
4.  ALL-TOP25 to display all data objects
    

Modification 11

Displaying the Structure Fragment View

Choosing Goto → Display Data Object → System Information in the menu displays the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry"). In this view, structures, internal tables, strings, data references, and objects are broken down into alignment gaps, character-like and byte-like areas, and all remaining types (such as P, I, F, strings, references, or internal tables).

Adjacent, character-like components of a structure (with the exception of strings) are organized internally into the same group, but only if there are no alignment gaps between these components. All possible alignment requirements for characters are respected here. In the same way, adjacent byte-like components are also grouped together.