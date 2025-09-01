  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-6.htm) →  [News for ABAP Release 6.20](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-620.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Tools%20in%20ABAP%20Release%206.20%2C%20ABENNEWS-620-TOOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Tools in ABAP Release 6.20

[1\. Code Inspector](#!ABAP_MODIFICATION_1@1@)
[2\. Runtime Monitor](#!ABAP_MODIFICATION_2@2@)
[3\. Debugger](#!ABAP_MODIFICATION_3@3@)
[4\. Runtime Analysis](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Code Inspector

Code Inspector is a tool that enables ABAP programs, function modules, classes, interfaces, and dictionary objects to be checked statically for errors, performance, security, and reliability. The development of these [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") is supported by simple search and check functions. The check results are available in the form of a tree hierarchy

Code Inspector is called for a single object from ABAP Editor by choosing Program → Check → Code Inspector, from Function Builder by choosing Function Module → Code Inspector, or from Class Builder by choosing Object Type → Check → Code Inspector. If more than one repository object needs to be checked, for example all development objects in a package, these can be grouped together in an object set. It is also possible to define check variants with individual checks. A check of all objects in an object set using a specified check variant is called an inspection.

The Code Inspector executes purely static checks that only return hints and clues for an object. The actual runtime behavior can be ascertained using Runtime Analysis or SQL Trace.

Modification 2   

Runtime Monitor

The Runtime Monitor is a framework that supports the recording of ABAP program information at runtime. This information can come from tests that are fixed in the ABAP kernel. ABAP programmers can also query and log specific program conditions at runtime.

With Test > Create ABAP Test, the Runtime Monitor creates a class, which can be called to record data in the source code. The data is first compressed in the main memory and periodically transferred to the database in a background job. The tests can be individually activated and deactivated for different servers. Compressing and saving the data hardly affects the [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry"), which means that the Runtime Monitor can be used at any time, even in a production operation.

Modification 3   

Debugger

The following improvements were made:

-   The display of the memory consumption of dynamic objects has been divided into an overview of the total memory consumption and ranking lists for individual objects. The ranking lists can be compiled according to specific criteria by choosing the function Change Settings. Memory consumption can now be displayed by choosing Goto → Status Display → Memory Usage.
-   Breakpoints are defined according to whether they take effect in a HTTP session or in a standard session. HTTP debugging is activated in the editor by choosing Utilities → Settings → HTTP Debugging. Depending on the setting, the system then displays either the HTTP or standard breakpoints in the Editor.
-   If, under Settings, the function Check Sorting Before [READ BINARY SEARCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) is selected, the system checks, before every execution of this statement, whether the internal table is sorted. If the table is not sorted, a runtime error occurs. This setting should only be activated shortly before reaching a relevant point in the source code, because there can be a significant loss in performance, depending on the table size.
-   If the Check Sorting Before [PROVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm) function was selected under settings, the system checks all of the relevant tables - and not just the area specified with extlim1 and extlim2 - for sorting and overlapping intervals when the long form of the PROVIDE statement is executed.
-   When displaying exception objects, the system only displayed the key itself in the field display for the TEXTID attribute that contains the OTR key of the text description assigned to the exception. Because this key is generated automatically and is nothing more than a sequence of numbers, assigning the corresponding text to the exception was difficult. The reason for this is that the displayed value had to be compared with the values of all constants generated for the exception. To simplify the assignment, the name of the constant generated for the key is now displayed as a tooltip. For example, in the case of an exception of the type CX\_SY\_FILE\_IO for the TEXTID attribute, the system displays READ\_ERROR or WRITE\_ERROR as a [tooltip](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentool_tip_glosry.htm "Glossary Entry"), depending on whether the exception was raised while reading or writing. The actual value of the attribute is the OTR key of the corresponding text description.
-   By choosing Debugging → Session, breakpoints and the settings System Debugging and Always Create Exception Object can now be saved persistently and reloaded later. The session can be saved by entering a name and expiration date for it. It is then available to other users and sessions, with the selected settings.

Modification 4   

Runtime Analysis

In Runtime Analysis, it is no longer possible to create temporary variants. Instead, a separate standard variant can be created, which is automatically assigned the user name by the system. Other variants can also be created with the name of the user or the names of other users, as long as a master record exists for them. When runtime analysis is first started, the system always displays the standard variant of the user. If it does not exist, the system displays the SAP standard variant. If runtime analysis is called again, the system always displays the last used variant.

Additionally, the create, delete, and copy functions are again included in the measurement restrictions block on the initial screen. While create and copy can only be executed as single functions, the F4 key can be used to delete multiple variants.