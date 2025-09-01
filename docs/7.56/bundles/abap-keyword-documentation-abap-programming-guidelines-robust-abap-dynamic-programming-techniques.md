# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Robust ABAP / Dynamic Programming Techniques

Included pages: 8


### abendynamic_prog_technique_gdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) → 

Dynamic Programming Techniques

Dynamic programming techniques are all techniques whose functions or effects are detectable only at runtime of a program in the runtime framework.

-   [Using Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm "Guideline")
-   [Runtime Errors in Dynamic Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_dyn_proc_guidl.htm "Guideline")
-   [Using Dynamic Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dyn_data_object_guidl.htm "Guideline")
-   [Memory Consumption of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm "Guideline")
-   [Administration Costs of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline")
-   [Accessing Data Objects Dynamically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm "Guideline")
-   [Generic Programming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_progr_guidl.htm "Guideline")
    

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenescape_functions.htm).

Continue
[Using Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm)
[Runtime Errors in Dynamic Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_dyn_proc_guidl.htm)
[Using Dynamic Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dyn_data_object_guidl.htm)
[Memory Consumption of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm)
[Administration Costs of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm)
[Accessing Data Objects Dynamically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm)
[Generic Programming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_progr_guidl.htm)


### abenuse_dynamic_progr_tech_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Using Dynamic Programming Techniques

Background

The use of dynamic programming techniques includes the following:

-   Accessing dynamic memory objects, that is, dynamic data objects (strings and internal tables), as well as instances of classes and anonymous data objects
-   Dynamically accessing data objects using reference variables and field symbols (to a certain extent, this also includes accessing generically typed formal parameters in procedures)
-   Dynamically invoking procedures or entire programs
-   Creating data types generically and using them to create anonymous data objects
-   Generic program development, where parts of the statements are specified using dynamic tokens or entire programs are not created until runtime

In this sense, handling reference variables can also be considered a dynamic technique. The dynamic type (the object to which the reference points) can be more specific than the static type of the variable, which entails polymorphic behavior and becomes apparent in assignments made using [up casts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenup_cast_glosry.htm "Glossary Entry") or [down casts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendown_cast_glosry.htm "Glossary Entry").

Rule

Use dynamic programming techniques with care

Use dynamic programming techniques only when this is necessary and reasonable. Use only as many dynamic language elements as required to carry out the assigned task.

Details

The advantage of dynamic programming techniques is an increased flexibility when creating programs. Dynamic programming techniques enable flexible and generic services to be developed that meet various requirements. The price to be paid for this advantage is that dynamic programming techniques may decrease the static checkability, legibility, maintainability, testability, performance, and also [security](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm). [Security standards](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorrectness_quality_guidl.htm "Guideline") may even prohibit the use of high-risk dynamic programming techniques.

This section describes various dynamic programming techniques. These range from [using strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstrings_guidl.htm "Guideline"), which we explicitly recommend, and [using internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_gdl.htm), which form a basis of ABAP programming, to [generating entire programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_progr_guidl.htm "Guideline"), which we advise against. The higher the dynamics, the more comprehensive the precautionary measures to be taken when using these techniques. Already the simple access to data objects involves a corresponding partial aspect, which was addressed in the rule for [Runtime Errors when Accessing Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_dyn_proc_guidl.htm "Guideline"). The rules in this section expand these specific rules and provide a more general framework.

Always consider the following aspects when deploying dynamic techniques:

-   Programs that work with dynamic techniques are usually more complex and harder to understand than programs that use only static techniques. This has a negative effect on maintainability.
-   In dynamic programming, many checks that are otherwise performed in compilations can be performed only at runtime. This considerably increases the risk of exceptions or runtime errors.
-   Checking the dynamic parts at runtime can reduce the processing speed, as the checks must be repeated each time the parts are used again.
-   More tests are required, since numerous states of a dynamic program and possible error situations must be checked.
-   If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenescape_functions.htm).

The significance of these aspects differs for the various dynamic programming techniques. For example, a program that uses strings is by no means more complex than a program that works only with text fields. In cases like this, a range of details must nevertheless be taken into account.


### abenruntime_error_dyn_proc_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Runtime Errors in Dynamic Processing

Background

When dynamic techniques are used, various exception situations can arise that can never occur when the corresponding static techniques are used because they can be checked statically.

Rule

Prevent runtime errors in dynamic processing

Respond appropriately to all possible error situations when using dynamic techniques.

Details

The different dynamic techniques also require different reactions to the possible exception situations. Examples:

-   When dynamic data objects are accessed, [their limitations must not be violated](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_data_obj_guidl.htm "Guideline"). For internal tables, for example, no line numbers must be specified for which no line exists.
-   Before data objects are accessed dynamically by using data references or field symbols, it must be ensured, before execution, that these are bound to a data object and this binding checked using IS BOUND or IS ASSIGNED, if necessary. Afterwards, the return code should be checked to see whether execution was successful.
-   In dynamic calls, exceptions must be caught that are raised due to nonexistent programs, classes, or procedures, or due to inappropriate parameters.
-   In the case of a dynamically specified token, for example, a dynamic WHERE condition in ABAP SQL or internal tables, possible exceptions must be caught and responded to accordingly.
-   If programs are developed generically, the programs in question must checked using the statement SYNTAX-CHECK.

These examples illustrate how the use of dynamic techniques can lead to more complex and less clear code due to the numerous possible exception situations. Of course, the more the mentioned techniques are combined, the more complex and less clear the code becomes. Therefore, [dynamic programming techniques must always be used with care](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm "Guideline").

Hint

If it is not possible to particular error situations, for example, because no exception that can be handled exists, it must be ensured that this error situation never occurs and this then verified in extensive test scenarios.

Bad Example

The seemingly legible source code section uses almost only dynamic operands and tokens. Neither ABAP Compiler nor the reader can know the content of the specified variables at runtime. An error in one of these variables results in a termination of the program.

READ TABLE where\_clauses ASSIGNING <where\_clause> WITH ...
DELETE FROM (dbtab\_name) WHERE (<where\_clause>).
IF sy-subrc = 0.
  CALL METHOD (class\_name)=>(method\_name).
ENDIF.

Good Example

The following source code corrects the above example with an appropriate error handling - this reduces the legibility, of course. Here, the fact that an initial dynamic WHERE condition means that no restrictions are imposed is also taken into account. As shown here, this case must be explicitly avoided. Otherwise, the entire table content will be deleted.

UNASSIGN <where\_clause>.
ASSIGN where\_clauses\[ ... \] TO <where\_clause>.
IF sy-subrc <> 0.
   RAISE EXCEPTION ...
ENDIF.
ASSERT <where\_clause> IS ASSIGNED.
IF <where\_clause> IS NOT INITIAL.
   TRY.
       DELETE FROM (dbtab\_name) WHERE (<where\_clause>).
     CATCH cx\_sy\_dynamic\_osql\_error.
       ...
   ENDTRY.
   IF sy-subrc = 0.
      TRY.
            CALL METHOD (class\_name)=>(method\_name).
          CATCH cx\_sy\_dyn\_call\_error.
            ...
       ENDTRY.
   ENDIF.
ENDIF.


### abenuse_dyn_data_object_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Using Dynamic Data Objects

Background

Dynamic data objects are a subgroup of [dynamic memory objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm "Guideline") and simply consist of:

-   Strings
-   Internal tables

The data type statically defines all properties for dynamic data objects, apart from memory consumption. Although the objects are managed internally using references, they are addressed by their names and value semantics applies. This means the referenced internal reference is always used for access.

Rule

Use appropriate dynamic data objects

To store dynamic data sets transiently when using dynamic data objects, always select the type that best corresponds to the content and the required access:

-   Strings for data that cannot be divided
-   Internal tables for data that can be divided

To avoid memory bottlenecks for large data sets, you might need to use other procedures as well.

Details

When using dynamic data objects, selecting the type is a key decision. The general rule is:

-   Data that can be handled as one piece is stored as a character string or byte string (string or xstring data type).
-   Structured data or data that can be sensibly divided into individual sections is stored as internal table lines.

However, if you need to store a very large data set as dynamic data objects, different aspects must be considered. string and xstring data objects must be stored as one piece in the memory, whereas the content of internal tables is stored in blocks. This is more likely to cause resource bottlenecks when strings are used. Even if sufficient [memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm "Guideline") space is available, the memory cannot handle a string of the requested length, due to fragmentation. In these cases, it makes more sense to store the data as an internal table instead of storing the data in a string as one piece.

The EXPORT statement for storing data in a cluster supports both storage types, for example: EXPORT ... TO DATA BUFFER stores the cluster in a single long byte string, whereas EXPORT ... TO INTERNAL TABLE distributes the cluster across numerous lines of an internal table. The latter possibility (EXPORT ... TO INTERNAL TABLE) is more secure (for the reason explained above), if the cluster needs to contain a very large data set.

Hint

Strings and internal tables are contained directly in the ABAP language in the form of data types and the corresponding access statements. In other programming languages, however, they are often implemented as libraries (such as string classes and container classes). In ABAP, it is usually [neither necessary nor useful](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobj_oriented_gdl.htm) to define specific classes for storing strings or table-like data. However, in rare cases, it may be useful to wrap internal tables in classes, to release more [memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline") when data is deleted.


### abenmem_cons_dyn_mem_obj_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Memory Consumption of Dynamic Memory Objects

Background

In dynamic objects, the actual data is addressed using a reference. This means that dynamic memory objects are always deep objects. Possible dynamic memory objects are:

-   Table bodies of internal tables addressed using internal table references
-   Text strings or byte strings addressed using internal string references
-   Anonymous data objects created using CREATE DATA and addressed using data references in data reference variables
-   Instances of classes created using CREATE OBJECT and addressed using object references in object reference variables

The maximum total size and number of all dynamically managed memory objects in an [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") are defined in principle by the maximum amount of memory that this session can request to execute programs.

Alongside the available memory on the current AS instance, there are two further technical limits that can restrict the size of individual dynamic memory objects:

-   The upper limit is 2³¹-1 for the size of a string in bytes (in the character representation [UCS-2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language, every character in a string occupies 2 bytes) and the number of rows in an internal table.
-   The memory for the content of a string and for hash management of an internal hashed table must be provided as one piece. Therefore, the ztta/max\_ memreq\_mb profile parameter is relevant for these two memory object types. It defines the maximum amount of memory that can be requested as one piece. A maximum size for strings and a limitation on the number of rows in hashed tables can be directly derived from this amount. This limitation does not depend on the width of table rows. Only the hash management (and not the table content) must be provided as one piece in the memory. The current limitation is the highest power of two, which is less than or equal to an eighth of the value specified by the profile parameter. For example, if the profile parameter specifies 250MB, a hashed table can contain approximately 16 million rows.

Any attempt to exceed these limits produces a runtime error and the termination of the program.

Rule

Avoid memory bottlenecks

When using dynamic memory objects, ensure that the program is not terminated due to a lack of memory.

Details

Memory limits are fixed limitations that cannot be deactivated with programming. To avoid memory bottlenecks, we recommend that you account for:

-   The limits of the available physical memory when developing a program
-   The specified technical limits for strings and hashed tables

The only way to prevent memory limits from being exceeded is to use programming to restrict the data loaded into the memory. This applies to processing large data sets and also to object creation. The latter can produce memory bottlenecks if overly large objects or too many small objects are created. Memory leaks (unused, unreleased memory) can also cause memory problems.

Editing Large Data Sets
You need to process large data sets that are stored in a persistent repository as one piece, but the sets do not fit into the available memory. In this case, you must import and process these data sets, either in packages or sequentially. A common language element here is the PACKAGE SIZE addition. You can this addition when importing large data sets to internal tables with the ABAP SQL statement SELECT. Memory-saving processing of large strings (Large Object, LOB) in database tables is also possible. Locators enable you to access substrings of strings in database tables. Streaming allows a sequential and gradual transfer of data into the memory. Both concepts were predominantly introduced in ABAP to avoid memory bottlenecks.

Releasing Memory
The main advantage of dynamically managed memory is that it can be released again. Use this option to delete data and objects no longer required, to avoid memory leaks and possible memory bottlenecks:

-   You can delete strings using the CLEAR statement.
-   You can use CLEAR or FREE to delete internal tables. FREE releases the entire memory space occupied by rows, whereas the initial memory requirement of the table remains reserved if CLEAR is used. An appropriate size for the [initial memory requirement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_memory_requ_guidl.htm "Guideline") is usually defined by the ABAP runtime framework itself. However, it can also be predefined using the INITIAL SIZE addition.
-   Anonymous data objects and instances of classes are deleted by the Garbage Collector, after all reference variables that refer to these objects have been initialized. Here, you must ensure that all references are actually identified during initialization. This is not always straightforward, particularly in the case of complex object networks. To analyze memory problems and detect memory leaks, you can use Memory Inspector and the ABAP Debugger memory analysis. You can display memory consumption rankings for all dynamically managed memory objects.

Hint

Note that statically managed data objects can also involve unnecessary memory consumption. For example, large flat structures with unused or initial components, whose initial values require a lot of memory space. Here, strings that only contain blanks occupy 2 bytes for each blank. The situation can become particularly critical if these structures are combined with dynamic techniques (if they are used as internal table rows, for example). Consequently, boxed components were introduced. They support initial value sharing for initial substructures, which means that the initial value of a substructure is created only once in memory. For structures with substructures that have a sparse fill level, this can reduce memory consumption and copy costs significantly.

Bad Example

In the following source code, all the data in a very large database table is imported into an internal table. Here there is an obvious risk of memory bottlenecks.

SELECT \*
       FROM very\_large\_table
       INTO TABLE ...

Good Example

In the following source code, the PACKAGE SIZE addition is used. This restricts the maximum size of the internal table to a secure level.

SELECT \*
       FROM very\_large\_table
       INTO TABLE ... PACKAGE SIZE 1000.
       ENDSELECT.


### abenadmin_costs_dyn_mem_obj_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Administration Costs of Dynamic Memory Objects

Background

Dynamic memory objects provide flexibility, but this comes at a price. The administration of these objects incurs internal costs, which are reflected in increased memory consumption, and in the worst case possibly far too high.

The total memory requirements of a dynamic memory object comprise the requirements of the objects themselves and the requirements of the administration data. The administration data consists of the reference, with a fixed size of 8 bytes, and a header that contains the address of the data itself and additional administration information. The reference initially points to a header and not directly to the object. The size of the header is itself dynamic and depends on the category of memory object as follows:

-   String headers of strings whose length is less than approximately 30 characters or 60 bytes require between 10 and 40 bytes approximately, depending on the string length. For longer strings, the header requires approximately 50 bytes, regardless of the string length.
-   Table headers require approximately 150 bytes (in 32 bit architecture) or approximately 200 bytes (in 64 bit architecture).
-   Object headers of anonymous data objects and instances of classes require approximately 30 bytes, regardless of the object.

The headers are created when dynamic data objects are provided with content or when objects are created. When a dynamic data object (a string or internal table) is initialized, only the content itself is deleted, while the header is retained to be used again. Only the statement FREE deletes (some) table headers that are too big. When it deletes an object, Garbage Collector also deletes the object header.

In internal tables, the administration data in the header is mostly independent of the number of rows but there can be additions to the data such as index or hash management. This memory is not created in the table header but in parallel to the table body. Depending on the table category, every table has at least one primary index (standard tables, sorted tables) or hash management (hashed tables). The costs are:

-   6 bytes on average per each table line for the primary index.
-   18 bytes per table line on average, provided that the table is not accessed using the DELETE or SORT statements. If one of these access types occurs, an average of 30 bytes is required per table line.

With each additional secondary table key, the [memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_key_guidl.htm "Guideline") requirement increases by the memory needed for secondary key management (secondary index or secondary hash management).

Rule

Consider the ratio of administration and application data

When using dynamically managed memory objects, it should remembered that memory is required for administration purposes, in addition to memory for the actual data. The size of the administrative memory should be relatively small compared to the application data.

Details

Memory management of dynamic memory objects is generally invisible for developers and cannot be controlled by developers. However, it is important to consider administration costs during the design and development phases, to ensure that the costs do not become disproportionately high compared to the actual data content. For internal tables, for example, the administration data consists of a part that is mainly independent of the number of lines and a part for each line. Consequently, tables with only a few lines and tables with very narrow lines are unfavorable. A sorted table of integers, for instance, always uses more memory for its administrative information than for the actual application data. Hashed tables require even more administration for each line.

In addition, the fill level of complex data objects assumes a significant role. If the application data is only stored in a small number of large memory objects, the administrative part usually does not play a role. However, if complex data objects (structures, internal tables) have a lot of deep components, care must be taken: For example, a disproportionate amount of memory space is lost for tables with a lot of relatively small strings or for nested tables containing relatively small tables. We distinguish the following three cases:

-   Complex data objects with a sparse fill level
    
    These data objects contain a lot of deep components and most of them are initial.
    
-   Complex data objects with a duplicative fill level
    
    These data objects contain a lot of deep components and most of them point to the same application data by means of a reference variable or sharing.
    
-   Complex data objects with a low fill level
    
    These data objects contain a lot of deep components that refer to different objects, strings, or internal tables, which only contain a small amount of application data or are empty.
    

Deep data objects with a fill level that is sparse or duplicative can usually be used without problems. But for complex data objects with a low fill level, a disparity between administration data and application data can easily occur. ABAP is inappropriate for large-scale use of data objects with a low fill level.

At a low dataset level, class wrapping can be considered as an alternative to internal tables. This is because the extra costs for objects are comparatively low and objects can be completely deleted from the memory (unlike dynamic data objects). This is an exception to the rule that [dynamic data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dyn_data_object_guidl.htm "Guideline") should be used wherever possible.

Hint

Besides the ratio of administration data to application data, the ratio of the [memory allocated](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_memory_requ_guidl.htm "Guideline") for application data and the memory actually used is also interesting for internal tables.

Example

The executable example [DEMO\_MEMORY\_USAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_usage_abexa.htm) demonstrates the administration costs of deep components with low data content.


### abendyn_access_data_obj_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Accessing Data Objects Dynamically

Background

Field symbols and data references are used to access data objects whose name and attributes are not known until runtime.

-   Field symbols
    
    A field symbol is a symbolic name for a data object declared with FIELD-SYMBOLS, to which memory areas can be assigned using the ASSIGN statement or, if internal tables are processed, using the ASSIGNING addition. Field symbols are typed either generically or completely and can be used like a data object in all appropriate operand positions. For typing, the same rules apply as for [formal parameters of procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_formal_param_guidl.htm "Guideline"). When accessing field symbols, value semantics applies, which means that the assigned memory content is addressed directly. Field symbols are thus always handled like dereferenced pointers.
    
-   Data references
    
    A data reference is the content of a data reference variable that is declared using REF TO and points to any data objects or parts of data objects. Data references are needed to create anonymous data objects using CREATE DATA or [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm). They can also be generated for existing data objects, however, using the statement GET REFERENCE, the reference operator [REF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_ref.htm), or, if internal tables are processed, using the REFERENCE INTO addition. A data reference variable is either completely generic or completely typed. When accessing data reference variables, reference semantics applies, which means that the data reference itself is addressed. To access the referenced memory content, a data reference variable must be dereferenced explicitly using the dereferencing operator (->\*).
    

Field symbols and data references are closely related because only completely typed data reference variables can be dereferenced in any operand position. Completely generic data reference variables (REF TO data) can be dereferenced in the ASSIGN statement only.

Data reference variables can be [declared](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_variables_guidl.htm "Guideline") in the same context as all other data objects, especially also as attributes of classes. Field symbols, in contrast, can only be declared within procedures ([methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) or in the global declaration part. However, the latter is [no longer allowed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_variables_guidl.htm "Guideline").

Rule

Use field symbols and data references in appropriate ways

Use field symbols and data references for the purpose that best matches their semantics:

-   Field symbols for value access (value semantics)
-   Data references for working with the references (reference semantics)

Details

Both field symbols and data references can be understood as pointers to memory areas. The main difference is in the different access semantics.

-   Due to their value semantics, field symbols should always be used if the focus is on the access to referenced data. Field symbols provide specific functions for this purpose, which are not available for data references:
    -   Dynamic access to attributes of classes and objects
        
        ASSIGN (class\_name)=>(attr\_name) ...
        ASSIGN oref->(attr\_name) ...
        
    -   Dynamic access to structure components
        
        ASSIGN ... COMPONENT ...
        
    -   Explicit casting
        
        ASSIGN ... CASTING ...
        
    -   Dereferencing of generic data reference variables
        
        ASSIGN dref->\* ...
        
-   Due to their reference semantics, data references are to be used if the focus is on the explicit handling of references to data objects. Data references are vital for creating anonymous data objects or complex dynamic data structures, such as trees or chained lists in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") or in the shared objects memory. Furthermore, data references are the preferred element for implementing explicit sharing between any data objects, and for passing pointers to data objects to procedures.

Note

Actually, data reference variables can be better used in programs that are based on [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") because they have the same semantics as object reference variables and therefore represent a more [modern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodern_abap_guidl.htm "Guideline") programming concept. Field symbols, on the other hand, provide more functions than data references and can thus not always be replaced by them. Consequently, the usage of field symbols for dynamic accesses to data objects is still recommended, although the sole use of data references would be preferred for consistency and simplicity reasons.

Bad Example

The following source code shows a loop for an internal table in which the system is supposed to directly [access the current line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_output_guidl.htm "Guideline"). If a generic data reference variable is used for this purpose, a field symbol is also needed for its dereferencing.

METHOD some\_method.
  "IMPORTING i\_itab TYPE INDEX TABLE
  DATA dref TYPE REF TO data.
  FIELD-SYMBOLS <fs> TYPE data.
  ...
  LOOP AT i\_itab REFERENCE INTO dref.
    ASSIGN dref->\* TO <fs>.
    <fs> = ...
  ENDLOOP.
  ...
ENDMETHOD.

Good Example

The following source code simplifies the above example by using a field symbol, which is required to access table lines anyway, directly and without using a data reference. The direct use of the field symbol thus also complies with the [KISS principle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkiss_principle_guidl.htm "Guideline").

METHOD some\_method.
  "IMPORTING i\_itab TYPE INDEX TABLE
  FIELD-SYMBOLS <fs> TYPE data.
  ...
  LOOP AT i\_itab ASSIGNING <fs>.
    <fs> = ...
  ENDLOOP.
...
ENDMETHOD.


### abengeneric_progr_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Generic Programming

Background

Generic programming (dynamic creation of source code) makes programs as dynamic as possible. The following methods can be used to achieve this:

-   Dynamic token specification
    
    Dynamic token specification involves specifying individual operands or whole parts of statements (clauses) in the form of character-like data objects. These are usually enclosed in parentheses and must contain source code with correct syntax at runtime. Important examples:
    
    -   Dynamic access to attributes of classes
    -   Dynamic calls of procedures, particularly methods (known as dynamic invokes)
    -   Dynamic type specifications when anonymous data objects are created. In this case, types can be used that are only created at runtime using Run Time Type Services ([RTTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrtti.htm)).
    -   Dynamic specifications of clauses when internal tables are accessed or in ABAP SQL.
        
        Dynamic token specifications are often used in combination with [dynamic access to data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm "Guideline").
        
-   Program generation
    
    Program generation involves preparing complete programs as content for internal tables and then creating the programs. A distinction is made between the following cases:
    
    -   Transient program generation using GENERATE SUBROUTINE POOL, where the generated programs only exist in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current program.
    -   Persistent program generation with INSERT REPORT. The generated programs are saved as repository objects.

Rule

Avoiding Program Generation

Program generation should only be used as a last resort for generic programming. Other dynamic methods (especially in application programs) should be tried first, such as dynamic token specification, runtime type services (RTTS) and dynamic access to data objects.

Details

Program generation has a lot of conceptual problems such as checking, testing, and editing the new programs. In addition, programs generated hastily can be a security risk because they cannot be statically checked. Creating programs is usually very intensive in terms of runtime and resources. Due to the above reasons, program generation should be avoided wherever possible and other dynamic methods used instead:

-   The dynamic token specification has the advantage that only parts of the statements are dynamic. The rest can be checked statically.
-   Runtime type services (RTTS) can be used as follows:
    -   RTTS define the type attributes of data objects at runtime (Runtime Type Information, RTTI). The capabilities of RTTI extend far beyond the statement DESCRIBE FIELD.
    -   It creates types at runtime (Runtime Type Creation, RTTC). RTTC should be used if the CREATE DATA statement does not offer sufficient options for the planned implementation (for example, building new structures).

These methods, combined with [field symbols and data references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm "Guideline"), are now usually sufficient for most tasks that could only be solved using program generation in older releases.

Exception

Program generation should only be used as a last resort if the other methods are not sufficient to achieve dynamic program control. Another reason is the processing speed. When program generation is used, the costs incurred due to checking and generation occur less frequently than with the other dynamic methods. However, program generation usually has worse system performance than dynamic token specification. The conceptual problems explained at the start are still applicable here and therefore careful consideration is needed.

Unlike application programs, system programs usually frequently rely on program generation and the associated language constructs. Examples include the generation of proxy classes for Web Dynpro or Web Services. ABAP Editor itself also uses statements such as READ REPORT and INSERT REPORT.

Hints

-   Even generated programs should always adhere to the predefined guidelines. For example, in a generated subroutine pool the program logic should be implemented/generated in the form of [local classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). The generated functions are usually called by means of a single [subroutine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline") that is used as an entry point into the generated local classes (see the following example).
-   To minimize the risks involved, it can be useful to save templates with correct syntax that adhere to the guidelines in the repository. READ REPORT can then be used to load the templates as templates for dynamically generated programs, in which only small parts are changed or added at runtime.
-   Subroutines in generated subroutine pools are an exception to the [rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"), which states that subroutines should no longer be created, and an exception to the [rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenintern_extern_proc_call_guidl.htm "Guideline"), which states that subroutines should no longer be called. In addition, absolute type names can be used to access the local classes of a generated subroutine pool. However, this violates the rule [Only call suitable procedures externally](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenintern_extern_proc_call_guidl.htm "Guideline").

Bad Example

The following source code demonstrates unnecessary program generation. The only reason for generating the program are dynamic reads on a database table. The name of the database table and the row type of the internal table into which data is read are replaced by a parameter value in the source code of the program to be generated. The value operator [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) is used to create the internal table. As recommended, the subroutine of the generated subroutine pool only contains the call for a method of a local class where the actual implementation is located. Instead of filling the program table row by row, it would have also been possible in this case to create a corresponding program in the repository and load this program using READ REPORT.

PARAMETERS dbtab TYPE c LENGTH 16.

DATA table TYPE REF TO data.
FIELD-SYMBOLS <table> TYPE STANDARD TABLE.

DATA: source TYPE TABLE OF string,
      program TYPE string,
      mess TYPE string.

source = VALUE #(
  ( \`program.\` )
  ( \`class main definition.\` )
  ( \`   public section.\` )
  ( \`     class-data\` )
  ( \`       dyn\_table type standard table of dyn\_name.\` )
  ( \`     class-methods meth\` )
  ( \`       exporting table type ref to data.\` )
  ( \`endclass.\` )
  ( \`class main implementation.\` )
  ( \`   method meth.\` )
  ( \`     select \*\` )
  ( \`            from dyn\_name\` )
  ( \`            into table @dyn\_table.\` )
  ( \`     get reference of dyn\_table into table.\` )
  ( \`   endmethod.\` )
  ( \`endclass.\` )
  ( \`form subr changing table type ref to data.\` )
  ( \`   main=>meth(\` )
  ( \` importing table = table ).\` )
  ( \`endform.\` ) ).

REPLACE ALL OCCURRENCES OF 'dyn\_name'
        IN TABLE source WITH dbtab.
GENERATE SUBROUTINE POOL source NAME program MESSAGE mess.
IF sy-subrc = 0.
   PERFORM subr IN PROGRAM (program) CHANGING table.
   IF table IS BOUND.
     ASSIGN table->\* TO <table>.
   ENDIF.
ELSE.
   ...

ENDIF.

Good Example

The following source code produces the same result as the example above, when executed successfully. In other words, the field symbol <table> points to an internal table that is filled with data from the dynamically specified database table. However, this task is performed much more efficiently in the example below due to the creation of an anonymous data object and a dynamically specified token. If the target table cannot be structured in exactly the same way as the database table, Runtime Type Creation (RTTC) must also be used.

PARAMETERS dbtab TYPE c LENGTH 20.
DATA table TYPE REF TO data.
FIELD-SYMBOLS <table> TYPE STANDARD TABLE.

TRY.
   CREATE DATA table TYPE TABLE OF (dbtab).
   ASSIGN table->\* TO <table>.
   SELECT \*
         FROM (dbtab)
         INTO TABLE @<table>.
  CATCH cx\_sy\_create\_data\_error cx\_sy\_dynamic\_osql\_error.
  ...
ENDTRY.
