  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Tools in Release 6.20

[1\. Code Inspector](#!ABAP_MODIFICATION_1@1@)
[
2\. Run Time Monitor](#!ABAP_MODIFICATION_2@2@)
[
3\. Debugger](#!ABAP_MODIFICATION_3@3@)
[
4\. Runtime Analysis](#!ABAP_MODIFICATION_4@4@)

Modification 1

Code Inspector

The Code Inspector is a tool that allows you statically check ABAP programs, function modules, classes, interfaces, and Dictionary objects for errors, performance, security, and reliability. The development of these [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry") is supported by simple search and check functions. The check results are available in the form of a tree hierarchy

The Code Inspector is called for a single object from the ABAP Editor by choosing Program → Check → Code Inspector, from the Function Builder by choosing Function Module → Code Inspector, or from the Class Builder by choosing Object Type → Check → Code Inspector. If you wish to check several Repository objects, for example all development classes in a package, then these can be grouped together in an object set. You also have the possibility of defining check variants with individual checks. A check of all objects in an object set using a specified check variant is called an inspection.

The Code Inspector executes purely static checks that only return hints and clues for an object. The actual runtime behavior can be ascertained using Runtime Analysis or SQL Trace.

Modification 2

Runtime Monitor

The Runtime Monitor is a framework that supports the recording of ABAP program information at runtime. This information can come from tests that are fixed in the ABAP kernel. ABAP programmers can also query and log specific program conditions at runtime.

With Test > Create ABAP Test, the Runtime Monitor creates a class, which can be called to record data in the source code. The data is first compressed in the main memory and periodically transferred to the database in a background job. The tests can be individually activated and deactivated for different servers. Compressing and saving the data hardly affects the [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"), which means that the Runtime Monitor can be used at any time, even in a production operation.

Modification 3

Debugger

-   The display of the memory consumption of dynamic objects has been divided into an overview of the total memory consumption and ranked lists for individual objects. You can compile the ranked lists according to specific criteria by choosing the function Change Settings. You can now display memory consumption by choosing Goto → Status Display → Memory Usage.
    
-   Breakpoints are defined according to whether they take effect in a http session or in a standar session. http debugging is activated in the Editor by choosing Utilities → Settings → HTTP Debugging. Depending on the setting, the system then displays either the http or standard breakpoints in the Editor.
    
-   If, under Settings, you selected the function Check Sorting Before [READ BINARY SEARCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm), the system checks, before every execution of this statement, whether the internal table is sorted. If the table is not sorted, a runtime error occurs. You should only activate this setting shortly before reaching a relevant point in the source code, because there can be a significant loss in performance, depending on the table size.
    
-   If you checked the "Check Sorting Before [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm)" function under settings, the system checks all of the relevant tables - and not just the area specified with extlim1 and extlim2 - for sorting and overlapping intervals when the long form of the PROVIDE statement is executed.
    
-   When displaying exception objects, the system only displayed the key itself in the field display for the TEXTID attribute that contains the OTR key of the text description assigned to the exception. Because this key is generated automatically and is nothing more than a sequence of numbers, assigning the corresponding text to the exception was difficult. The reason for this is that the displayed value had to be compared with the values of all constants generated for the exception. To simplify the assignment, the name of the constant generated for the key is now displayed as a tooltip. For example, in the case of an exception of the type CX\_SY\_FILE\_IO for the TEXTID attribute, the system displays READ\_ERROR or WRITE\_ERROR as a [tooltip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquick_info_glosry.htm "Glossary Entry"), depending on whether the exception was raised while reading or writing. The actual value of the attribute is the OTR key of the corresponding text description.
    
-   By choosing Debugging → Session, you can now save breakpoints and the settings "System Debugging" and "Always Create Exception Object" persistently and reload them later. You can save the session, entering a name and expiry date for it. It is then available to other users and sessions, with the selected settings.
    

Modification 4

Runtime Analysis

In Runtime Analysis, you can no longer create temporary variants. Instead, you can create a separate standard variant, which is automatically assigned the user name by the system. You can also create other variants with your own name or that of other users, as long as a master record exists for them. When you first start the runtime analysis, the system always display your own standard variant. If it does not exist, the system displays the SAP standard variant. If you call the runtime analysis again, the system always displays the last used variant.

Additionally, the create, delete, and copy functions are again included in the measurement restrictions block on the initial screen. While create and copy can only be executed as single functions, you can use the F4 key to delete multiple variants.