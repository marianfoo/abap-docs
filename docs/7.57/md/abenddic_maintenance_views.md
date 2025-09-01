  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Maintenance Views, ABENDDIC_MAINTENANCE_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Maintenance Views

A DDIC maintenance view is a special view for performing writes on multiple tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A DDIC maintenance view is not defined on the database. The structure type defined using a maintenance view can be referenced in ABAP programs using TYPE. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction SE54 can be used to create dialogs called maintenance dialogs for maintenance views, which can themselves be used to edit the content of the tables of the maintenance views jointly in extended table maintenance (transactions SM30 and SM31).

When data records are inserted using DDIC maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Primary Table and Secondary Tables   

All DDIC database tables grouped in a DDIC maintenance view must be joined using [foreign key dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)), which means that the join conditions are always derived from a foreign key in the case of maintenance views. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

-   The secondary tables must have an N:1 dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An N:1 dependency exists if the secondary table is the [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry") in the [foreign key in question](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").
-   If the secondary table is the [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"), the foreign key fields must be key fields of a table or the foreign key must have the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") N:1 or N:C.

A maintenance view implements an inner join. All key fields in the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

Hint

If a DDIC database table is joined with its [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") in a DDIC maintenance view, the logon language is selected automatically for this table.

Time-Dependent Key   

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. This means that the lines of these views have chronological importance.

Hint

The ability to change time-dependent views makes it possible to restrict the new entries inserted to those that are only missing time information.

Maintenance Status   

The Access setting in the maintenance status of a maintenance view can have the following values:

-   Read only
    
    The maintenance view can only be used to read data.
    
-   Read, change, delete, and insert
    
    The maintenance view can be used to change, delete, and insert data.
    
-   Read and change
    
    The maintenance view can be used to change data, but not delete or insert it.
    
-   Read and change (time-dependent views)
    
    The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.
    

Hint

Like a DDIC database table, the maintenance status of a DDIC maintenance view has a [Display and Maintenance](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting. The setting Display/maintenance not allowed is not possible here.

Maintenance Characteristics of View Fields   

Alongside the maintenance status of the view, characteristics called maintenance characteristics can be defined for each view field:

-   Standard
    
    There are no restrictions on the view field.
    
-   Read-only
    
    The DDIC maintenance view cannot be used to perform writes on the view field.
    
-   Subset
    
    A field of this type is used to construct subsets when data is edited in extended table maintenance. Only a subset of the data is displayed. This subset is defined by entering an appropriate value in this field.
    
-   Hidden
    
    A field of this type is not displayed in extended table maintenance and cannot be edited there. The content is initialized implicitly.
    

Delivery Class   

A DDIC maintenance view also has a [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). The delivery class of a maintenance view is analyzed in the extended table maintenance.

-   If the view is assigned one of the delivery classes G or E, the customer namespace for the entries of the view must be defined in the DDIC database table TRESC.
-   The transport interface of extended table maintenance must match the delivery class.

Regardless of this, the transport of the basis tables involved in upgrades and in transports between customer systems is determined solely by their [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)).