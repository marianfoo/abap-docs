  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for ABAP Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Internal Tables in ABAP Release 7.0, EhP2

[1\. Dynamic WHERE Condition](#!ABAP_MODIFICATION_1@1@)
[2\. Definition of Secondary Table Keys](#!ABAP_MODIFICATION_2@2@)
[3\. Using Secondary Keys](#!ABAP_MODIFICATION_3@3@)
[4\. Updating Secondary Keys](#!ABAP_MODIFICATION_4@4@)
[5\. Streaming for Internal Tables](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Dynamic WHERE Condition

From ABAP release 7.0, EhP2, the statements [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)), [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)), and [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) make it possible to specify the [WHERE](javascript:call_link\('abaploop_at_itab_cond.htm'\)) condition in a cond\_syntax data object dynamically.

Modification 2   

Definition of Secondary Table Keys

Previously, each internal table had just one [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). Any search key could be entered when accessing internal tables, but this was not very efficient. Also, standard tables were always searched linearly during key access. To be able to efficiently access an internal table with different keys, and to also allow efficient key access to standard tables, secondary table keys were introduced.

From ABAP release 7.0, EhP2, [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be defined for internal tables with [TYPES](javascript:call_link\('abaptypes_keydef.htm'\)) and [DATA](javascript:call_link\('abapdata_keydef.htm'\)) as well as in ABAP Dictionary. An internal table can have up to 15 secondary table keys with different names. At the same time, what was previously the table key became the primary table key, and a predefined name for it, primary\_key, was introduced. This can be replaced with an alias name in the [enhanced definition](javascript:call_link\('abaptypes_primary_key.htm'\)) of the primary table key in ABAP release 7.0, EhP2.

Secondary table keys can be [hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") or [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"). A [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") is created for each sorted secondary key of an internal table. The previous table index, which exists only for index tables, becomes the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

Secondary table keys are part of the [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") of an internal table. Secondary keys can be specified generically for standalone table types.

Modification 3   

Using Secondary Keys

The following additions have been introduced for statements that access lines of internal tables:

-   WITH *\[*TABLE*\]* KEY keyname COMPONENTS ...
-   USING KEY keyname

keyname can be used to specify the name of the key to be used statically or dynamically.

At the same time, statements that previously only accessed the primary key have been enhanced so that access to secondary keys is also possible. The table index used can now also be specified explicitly using a table key when indexes are specified. The system field sy-tabix is now filled with reference to the table index used. It is set to 0 for access using a hash key.

The enhanced statements are:

-   [READ TABLE itab](javascript:call_link\('abapread_table.htm'\))
    
    The lines to be read can be specified using a secondary key.
    
-   [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\))
    
    The processing sequence and conditions can be controlled using a secondary table key.
    
-   [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\))
    
    Only a secondary key for the source table can be specified here, from which multiple lines are copied. The position they are inserted at is determined solely using the primary key and the primary index.
    
-   [APPEND](javascript:call_link\('abapappend.htm'\))
    
    Only a secondary key for the source table can be specified here, onto which multiple lines are appended.
    
-   [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\))
    
    The lines to be modified can be specified using a secondary key.
    
-   [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\))
    
    The lines to be deleted can be specified using a secondary key.
    

In statements where these additions have not been introduced, such as [SORT](javascript:call_link\('abapsort_itab.htm'\)), [COLLECT](javascript:call_link\('abapcollect.htm'\)), or [PROVIDE](javascript:call_link\('abapprovide.htm'\)), secondary keys are not explicitly supported.

Modification 4   

Updating Secondary Keys

In all statements that change the content or structure of an internal table, the internal administration of the secondary table key (hash administration or secondary table index) is updated automatically as follows:

-   In inserting operations, such as INSERT or APPEND, and in change operations using MODIFY, the secondary table key administration of unique keys is updated immediately ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")), while for non-unique table keys it is updated upon the next explicit use of the secondary table key ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). If an update infringes the uniqueness of a secondary key, an exception is raised immediately.
-   For block operations, such as statements between internal tables, or when internal tables are filled using SELECT, the behavior is the same as with inserting operations.
-   When individual lines are modified using field symbols or data references that point to table lines, the secondary key administration of unique keys is updated upon the next access to the internal table ([delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry")), and the secondary key administration of non-unique keys is updated upon the next explicit use of the secondary table key ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). A uniqueness check is also run when the update is made. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual lines are modified. An exception is not raised until the table is next used.

Class CL\_ABAP\_ITAB\_UTILITIES contains methods that can be used to update single secondary keys or all secondary keys for an internal table in exceptional situations.

Modification 5   

Streaming for Internal Tables

The new [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") concept supports [internal tables](javascript:call_link\('abenitab_streams.htm'\)).