using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ageTravel_api.Migrations
{
    public partial class terceiroBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Compras_Clientes_ClientesId",
                table: "Compras");

            migrationBuilder.DropForeignKey(
                name: "FK_Compras_Destinos_DestinosId",
                table: "Compras");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "Compras");

            migrationBuilder.DropColumn(
                name: "DestinoId",
                table: "Compras");

            migrationBuilder.AlterColumn<int>(
                name: "DestinosId",
                table: "Compras",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ClientesId",
                table: "Compras",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Compras_Clientes_ClientesId",
                table: "Compras",
                column: "ClientesId",
                principalTable: "Clientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Compras_Destinos_DestinosId",
                table: "Compras",
                column: "DestinosId",
                principalTable: "Destinos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Compras_Clientes_ClientesId",
                table: "Compras");

            migrationBuilder.DropForeignKey(
                name: "FK_Compras_Destinos_DestinosId",
                table: "Compras");

            migrationBuilder.AlterColumn<int>(
                name: "DestinosId",
                table: "Compras",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ClientesId",
                table: "Compras",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ClienteId",
                table: "Compras",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DestinoId",
                table: "Compras",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Compras_Clientes_ClientesId",
                table: "Compras",
                column: "ClientesId",
                principalTable: "Clientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Compras_Destinos_DestinosId",
                table: "Compras",
                column: "DestinosId",
                principalTable: "Destinos",
                principalColumn: "Id");
        }
    }
}
