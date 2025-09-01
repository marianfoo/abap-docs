  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Components](javascript:call_link\('abenldb_oview.htm'\)) →  [Logical Databases - Further Elements](javascript:call_link\('abenldb_others.htm'\)) → 

Logical Databases - Selection Views

Selection views are collections of fields from different database tables. At runtime, additional selections for the fields of these selection views can be defined using [dynamic selections](javascript:call_link\('abenldb_free_selections.htm'\)). These additional selections are passed to the database and reduce the number of database reads. Before this can happen, the database tables must be defined for dynamic selections in the selection include of the logical database and the database program must be programmed accordingly.

Selection views can be edited by choosing Extras → Selection Views in [Logical Database Builder](javascript:call_link\('abenlogical_database_build_glosry.htm'\) "Glossary Entry"). They are identified by a three-character key that describes the origin of the selection view: SAP for predefined selections views or CUS for customer-defined selection views. In this way, users can define the selection view that best meets their requirements for a given logical database.

If a selection view is to be used in a logical database, the only permitted name is STANDARD and it must be associated with a logical database. In selection views not associated with a special logical database, any name can be chosen.

The following rules apply when constructing dynamic selections on selections screens of logical databases: Only those selection views are used that have the name STANDARD and that are associated with the logical database. If a customer-defined selection view (with key CUS) exists, this view is used; if not, the predefined selection view is used. If there is no selection view with the name STANDARD associated with the logical database, dynamic selections are constructed across all fields of all tables in the logical database.

Selection views have the following elements:

-   Function groups

In selection views, fields are collected in functional groups. All fields assigned to a functional group can be found in the view. The grouping of fields in functional groups facilitates the combination of fields by content and makes them easier to find later. Functional groups are defined by assigning a functional group ID and a text. The functional group ID can consist of any two characters and is important only when the selection view is being edited.

-   Tables/nodes

The names of the database tables from which fields can be selected for the selection view. The fields of each of these tables can be displayed in the lower part of the screen. The table can be selected by choosing Select or by double-clicking the table name or node name.

-   Fields of the table/node

Here, a field is assigned to a functional group and becomes part of the selection view. Before a field assigned to a function group can be used as a dynamic selection in the logical database, the corresponding node in the database program of the logical database must also be defined accordingly. A field assigned to a functional group can be flagged for a preselection. The fields flagged in this way appear as selection criteria on the selection screen of the dynamic selections. The preselected fields can be modified by choosing New Field Selection on this selection screen. A selection list appears of all fields in the selection view and for which dynamic selections are supported in the corresponding nodes of the logical database.