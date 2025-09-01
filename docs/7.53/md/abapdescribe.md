  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) → 

DESCRIBE

Syntax Forms

[Field Properties](javascript:call_link\('abapdescribe_field.htm'\))
1\. DESCRIBE FIELD ...
[Properties of an Internal Table](javascript:call_link\('abapdescribe_table.htm'\))
2\. DESCRIBE TABLE ...
[Distance Between Two Fields](javascript:call_link\('abapdescribe_distance.htm'\))
3\. DESCRIBE DISTANCE ...

Effect

The variants of the statement DESCRIBE listed above can be used to specify some of the attributes displayed by data objects at runtime.

Notes

-   The statement DESCRIBE is used to determine the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be identified. Additional information, for example the static or dynamic type of a reference, cannot be determined by DESCRIBE. For this kind of information, the type description classes of [runtime type services](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") (RTTS) should be used. These enable all data object attributes of all data types to be determined. Since the functions of the RTTS type description classes comprise the complete functions of the DESCRIBE statement, the system classes can be used instead of the statement.
    
-   The variant [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)) specifies the attributes of lists in the list buffer.
    

Continue
[DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\))
[DESCRIBE TABLE](javascript:call_link\('abapdescribe_table.htm'\))
[DESCRIBE DISTANCE](javascript:call_link\('abapdescribe_distance.htm'\))
[DESCRIBE - Internal Variant](javascript:call_link\('abendescribe_internal.htm'\))